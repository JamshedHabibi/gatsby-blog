import React from "react"
import { AboutSummary } from "./about-summary"
import { fonts } from "../../../styling/fonts"

export const SidePanel = () => (
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
    <AboutSummary />
  </div>
)
