import React from "react"
import mq from "../../../styling/media-queries"
import { colors } from "../../../styling/colors"
import MobileNavbar from "./mobile-navbar"

export const MobileNav: React.FC<any> = ({ children }) => {
  return (
    <>
      <div
        css={mq({
          display: ["initial", "none"],
          width: "100%",
          position: "fixed",
          padding: "10px 20px 10px 20px",
          top: "-33vh",
          background: colors.navbarBlack,
          zIndex: 50,
          transition: "all 0.3s ease-in",
        })}
        id="nav-tabs"
      >
        {children}
      </div>
      <MobileNavbar />
    </>
  )
}
