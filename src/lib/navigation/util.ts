import { AppModule } from "lib/AppRegistry"
import { getCurrentEmissionState } from "lib/store/GlobalStore"

export interface MatchResult {
  type: "match"
  module: AppModule
  params: object
}

export function handleFairRouting(result: MatchResult): MatchResult {
  const showNewFairViewFeatureEnabled = getCurrentEmissionState().options.AROptionsNewFairPage
  const fairSlugs = getCurrentEmissionState().legacyFairSlugs

  // @ts-ignore
  const useNewFairView = showNewFairViewFeatureEnabled && !fairSlugs?.includes(result.params.fairID)

  const fairModuleMapping: Record<any, AppModule> = {
    Fair: "Fair2",
    FairArtworks: "Fair2",
    FairMoreInfo: "Fair2MoreInfo",
    FairArticles: "Fair2Articles",
    FairArtists: "Fair2",
    FairExhibitors: "Fair2",
    FairBMWArtActivation: "FairBMWArtActivation",
  }

  if (useNewFairView) {
    const fairModule = fairModuleMapping[result.module]
    result.module = fairModule ?? result.module
  }

  return result
}
