import { AuctionResultTestsQuery } from "__generated__/AuctionResultTestsQuery.graphql"
import { renderWithWrappers } from "lib/tests/renderWithWrappers"
import { extractNodes } from "lib/utils/extractNodes"
import moment from "moment"
import { Text } from "palette"
import React from "react"
import { graphql, QueryRenderer } from "react-relay"
import { createMockEnvironment } from "relay-test-utils"
import { mockEnvironmentPayload } from "../../../tests/mockEnvironmentPayload"
import { AuctionResultFragmentContainer } from "../AuctionResult"

jest.unmock("react-relay")

describe("AuctionResults", () => {
  let mockEnvironment: ReturnType<typeof createMockEnvironment>
  beforeEach(() => (mockEnvironment = createMockEnvironment()))

  const TestRenderer = () => (
    <QueryRenderer<AuctionResultTestsQuery>
      environment={mockEnvironment}
      query={graphql`
        query AuctionResultTestsQuery @relay_test_operation {
          artist(id: "some-id") {
            auctionResultsConnection(first: 1) {
              edges {
                node {
                  id
                  ...AuctionResult_auctionResult
                }
              }
            }
          }
        }
      `}
      variables={{}}
      render={({ props }) => {
        if (props?.artist) {
          const results = extractNodes(props.artist.auctionResultsConnection)
          return <AuctionResultFragmentContainer auctionResult={results[0]} onPress={() => null} />
        }
        return null
      }}
    />
  )

  it("renders auction result when auction results are available", () => {
    const tree = renderWithWrappers(<TestRenderer />).root
    mockEnvironmentPayload(mockEnvironment, {
      Artist: () => ({
        auctionResultsConnection: {
          edges: [
            {
              node: {
                currency: "USD",
                priceRealized: {
                  display: "$one gazillion",
                },
              },
            },
          ],
        },
      }),
    })

    expect(tree.findAllByType(Text)[4].props.children).toBe("$one gazillion")
  })

  it("renders auction result when auction results are not available yet", () => {
    const tree = renderWithWrappers(<TestRenderer />).root
    mockEnvironmentPayload(mockEnvironment, {
      Artist: () => ({
        auctionResultsConnection: {
          edges: [
            {
              node: {
                priceRealized: {
                  display: null,
                },
                saleDate: moment().subtract(1, "day").toISOString(),
              },
            },
          ],
        },
      }),
    })

    expect(tree.findAllByType(Text)[4].props.children).toBe("Awaiting results")
  })

  it("renders auction result when auction result is `bought in`", () => {
    const tree = renderWithWrappers(<TestRenderer />).root
    mockEnvironmentPayload(mockEnvironment, {
      Artist: () => ({
        auctionResultsConnection: {
          edges: [
            {
              node: {
                priceRealized: {
                  display: null,
                },
                saleDate: moment().subtract(2, "months").toISOString(),
                boughtIn: true,
              },
            },
          ],
        },
      }),
    })

    expect(tree.findAllByType(Text)[4].props.children).toBe("Bought in")
  })

  it("renders auction result when auction results are not available", () => {
    const tree = renderWithWrappers(<TestRenderer />).root
    mockEnvironmentPayload(mockEnvironment, {
      Artist: () => ({
        auctionResultsConnection: {
          edges: [
            {
              node: {
                priceRealized: {
                  display: null,
                },
                saleDate: moment().subtract(2, "months").toISOString(),
                boughtIn: false,
              },
            },
          ],
        },
      }),
    })

    expect(tree.findAllByType(Text)[4].props.children).toBe("Not available")
  })
})
