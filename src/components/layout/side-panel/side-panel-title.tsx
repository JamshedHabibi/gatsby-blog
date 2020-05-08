import React from "react"
import { colors } from "../../../styling/colors"

type SidePanelTitleProps = {
  title: string
}
export const SidePanelTitle: React.FC<SidePanelTitleProps> = ({ title }) => (
  <div
    css={{
      border: `1px solid ${colors.mainBlueText}`,
      textAlign: "center",
      width: "100%",
      padding: ".5rem .5rem",
    }}
  >
    {title}
  </div>
)
