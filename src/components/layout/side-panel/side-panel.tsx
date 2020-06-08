import React from "react"
import { AboutMeSummary } from "./about-summary"
import { fonts } from "../../../styling/fonts"
import { useCmsContentQuery } from "../../../components/cms/cms-content-query"

export const SidePanel = () => {
  const sidePanelContent = useCmsContentQuery().sidePanel.nodes[0].childDataJson
  console.log(sidePanelContent)
  return (
    <div
      css={[
        fonts.mainPageText,
        {
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          padding: "0 1rem",
        },
      ]}
    >
      <AboutMeSummary aboutMeContent={sidePanelContent.aboutMeSummary} />
    </div>
  )
}
