import React from "react"
import { SidePanelTitle } from "./side-panel-title"
import { flex } from "../../../styling/constants"

type AboutMeSummaryProps = {
  aboutMeContent: {
    image: { imagePath: string; alternateText: string }
    summary: string
  }
}

export const AboutMeSummary: React.FC<AboutMeSummaryProps> = ({
  aboutMeContent,
}) => {
  const { image, summary } = aboutMeContent
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
      }}
    >
      <div css={[flex.rowCentered, { paddingBottom: "1rem" }]}>
        <SidePanelTitle title="About Me" />
      </div>

      <div css={[flex.rowCentered]}>
        <img
          src={image.imagePath}
          alt={image.alternateText}
          css={{ height: "10rem", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div css={[flex.rowCentered]}>
        <p css={{ textAlign: "center", fontSize: "0.8rem" }}>
          {summary.slice(0, 150) + "..."}
        </p>
      </div>
    </div>
  )
}
