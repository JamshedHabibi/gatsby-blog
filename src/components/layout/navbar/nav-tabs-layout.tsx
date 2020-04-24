import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import mq from "../../../styling/media-queries"
import { SocialMediaLinks } from "../../social-media-links"
import { colors } from "../../../styling/colors"
import { fonts } from "../../../styling/fonts"

type NavTabProps = {
  path: string
  displayText: string
}

const navTabStyle = css([
  fonts.navbar,
  mq({
    color: colors.navbarText,
    fontSize: ".94rem",
    textDecoration: "none",
    marginRight: ["0", "2rem", "3rem"],
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      color: colors.highlightNavbarText,
    },
  }),
])

const NavTab: React.FC<NavTabProps> = ({ path, displayText }) => {
  return (
    <div css={mq({ paddingBottom: [".5rem", "0"] })}>
      <Link css={navTabStyle} to={path}>
        {displayText.toUpperCase()}
      </Link>
    </div>
  )
}

export const NavTabLayout: React.FC<any> = () => {
  return (
    <>
      <NavTab path="/" displayText="Home" />
      <NavTab path="/about" displayText="About" />
      <NavTab path="/categories" displayText="Categories" />
      <NavTab path="/archive" displayText="Archive" />
      <SocialMediaLinks
        styling={mq({
          display: ["none", "flex"],
          width: "100%",
          justifyContent: [null, "flex-end"],
          marginRight: ["0", "2rem"],
          paddingTop: ".325rem",
        })}
        textColor={colors.navbarText}
        highlightColor={colors.highlightNavbarText}
      />
    </>
  )
}
