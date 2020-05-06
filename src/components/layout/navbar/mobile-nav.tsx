import React from "react"
import mq from "../../../styling/media-queries"
import { colors } from "../../../styling/colors"
import MobileNavbar from "./mobile-navbar-toggle"
import { zIndex } from "../../../styling/constants"

export const MobileNav: React.FC<any> = ({ children }) => {
  return (
    <div>
      <div
        css={mq({
          display: ["initial", "none"],
          width: "100%",
          position: "fixed",
          top: "-33vh",
          background: colors.navbarBackground,
          zIndex: zIndex.layout,
          transition: "all 0.3s ease-in",
        })}
        id="nav-tabs"
      >
        {children}
      </div>
      <MobileNavbar />
    </div>
  )
}
