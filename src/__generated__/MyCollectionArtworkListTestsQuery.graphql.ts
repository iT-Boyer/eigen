/* tslint:disable */
/* eslint-disable */
/* @relayHash 8172752d925ab26efe3e33622c806bec */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkListTestsQueryVariables = {};
export type MyCollectionArtworkListTestsQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"MyCollectionArtworkList_me">;
    } | null;
};
export type MyCollectionArtworkListTestsQuery = {
    readonly response: MyCollectionArtworkListTestsQueryResponse;
    readonly variables: MyCollectionArtworkListTestsQueryVariables;
};



/*
query MyCollectionArtworkListTestsQuery {
  me {
    ...MyCollectionArtworkList_me
    id
  }
}

fragment MyCollectionArtworkListItem_artwork on Artwork {
  artist {
    internalID
    id
  }
  artistNames
  category
  costMinor
  costCurrencyCode
  date
  depth
  editionSize
  editionNumber
  height
  id
  image {
    url
  }
  internalID
  medium
  metric
  slug
  title
  width
}

fragment MyCollectionArtworkList_me on Me {
  id
  myCollectionConnection(first: 20, sort: CREATED_AT_DESC) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        slug
        ...MyCollectionArtworkListItem_artwork
        __typename
      }
      cursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "CREATED_AT_DESC"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v3 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": false
},
v4 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v5 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": false
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MyCollectionArtworkListTestsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkList_me",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MyCollectionArtworkListTestsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "myCollectionConnection",
            "storageKey": "myCollectionConnection(first:20,sort:\"CREATED_AT_DESC\")",
            "args": (v1/*: any*/),
            "concreteType": "MyCollectionConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "MyCollectionEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "slug",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artist",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artist",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v0/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "artistNames",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "category",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "costMinor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "costCurrencyCode",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "depth",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "editionSize",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "editionNumber",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "height",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "image",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Image",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "url",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "medium",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "metric",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "width",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "myCollectionConnection",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "MyCollectionArtworkList_myCollectionConnection",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MyCollectionArtworkListTestsQuery",
    "id": "3acb5a54bc244a009c083d151774aa65",
    "text": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "type": "Me",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "me.id": (v3/*: any*/),
        "me.myCollectionConnection": {
          "type": "MyCollectionConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "me.myCollectionConnection.pageInfo": {
          "type": "PageInfo",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "me.myCollectionConnection.edges": {
          "type": "MyCollectionEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "me.myCollectionConnection.pageInfo.hasNextPage": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "me.myCollectionConnection.pageInfo.endCursor": (v4/*: any*/),
        "me.myCollectionConnection.edges.node": {
          "type": "Artwork",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "me.myCollectionConnection.edges.node.id": (v3/*: any*/),
        "me.myCollectionConnection.edges.node.slug": (v3/*: any*/),
        "me.myCollectionConnection.edges.cursor": (v5/*: any*/),
        "me.myCollectionConnection.edges.node.__typename": (v5/*: any*/),
        "me.myCollectionConnection.edges.node.artist": {
          "type": "Artist",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "me.myCollectionConnection.edges.node.artistNames": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.category": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.costMinor": {
          "type": "Int",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "me.myCollectionConnection.edges.node.costCurrencyCode": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.date": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.depth": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.editionSize": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.editionNumber": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.height": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.image": {
          "type": "Image",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "me.myCollectionConnection.edges.node.internalID": (v3/*: any*/),
        "me.myCollectionConnection.edges.node.medium": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.metric": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.title": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.width": (v4/*: any*/),
        "me.myCollectionConnection.edges.node.artist.internalID": (v3/*: any*/),
        "me.myCollectionConnection.edges.node.artist.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "me.myCollectionConnection.edges.node.image.url": (v4/*: any*/)
      }
    }
  }
};
})();
(node as any).hash = '7e4a91294c292a8fc730d4e466ccec68';
export default node;