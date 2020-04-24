import React from "react"
import mq from "../../../styling/media-queries"

const DesktopNav: React.FC<any> = ({ children }) => {
  return (
    <div
      css={mq({
        display: ["none", "flex"],
        width: "100%",
        position: "fixed",
        padding: ".5rem 1rem .5rem 1rem",
        top: "0vh",
        background: "rgb(0,0,0,0.9)",
        zIndex: 99,
      })}
    >
      {children}
    </div>
  )
}

export default DesktopNav
