import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import mq from "../../../styling/media-queries"
import { colors } from "../../../styling/colors"
import { fonts } from "../../../styling/fonts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { flex } from "../../../styling/constants"

const navTabStyle = css([
  fonts.navbar,
  {
    color: colors.navbarText,
    fontSize: ".85rem",
    textDecoration: "none",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      color: colors.highlightNavbarText,
    },
  },
])

type NavTabProps = {
  path: string
  displayText: string
  showArrow?: boolean
}

const NavTab: React.FC<NavTabProps> = ({ path, displayText, showArrow }) => {
  return (
    <div
      css={mq({
        padding: ".5rem",
      })}
    >
      <Link css={navTabStyle} to={path}>
        {displayText.toUpperCase()}
        {showArrow ? (
          <FontAwesomeIcon
            css={{
              fontSize: "0.6rem",
              paddingLeft: ".4rem",
              paddingBottom: ".05rem",
            }}
            icon={"chevron-down"}
          />
        ) : null}
      </Link>
    </div>
  )
}

export const NavTabLayout: React.FC<any> = () => {
  return (
    <div
      css={[
        flex.rowCentered,
        {
          width: "100%",
        },
      ]}
    >
      <div
        css={mq({
          display: "flex",
          justifyContent: "space-around",
          width: ["90%", "80%", "40%"],
        })}
      >
        <NavTab path="/" displayText="Home" />
        <NavTab path="/about" displayText="About" />
        <NavTab path="/categories" displayText="Categories" showArrow />
        <NavTab path="/archive" displayText="Archive" showArrow />
      </div>
    </div>
  )
}
