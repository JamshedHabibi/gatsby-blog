import React from "react"
import mq from "../../../styling/media-queries"
import { colors } from "../../../styling/colors"
import { zIndex, flex } from "../../../styling/constants"

const DesktopNav: React.FC<any> = ({ children }) => {
  return (
    <div
      css={mq({
        display: ["none", "flex"],
        width: "100%",
        height: "8%",
        position: "fixed",
        top: "0vh",
        zIndex: zIndex.layout,
        background: colors.mainBabyBlue,
      })}
    >
      {children}
    </div>
  )
}

export default DesktopNav
