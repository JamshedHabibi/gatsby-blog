import React, { Component } from "react"
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
          width: ["80%", "40%"],
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

class NavTab extends Component<NavTabProps, { showArrowUp: boolean }> {
  constructor(props: NavTabProps) {
    super(props)
    this.state = {
      showArrowUp: false,
    }
  }

  showArrowUp = () => {
    this.setState({ showArrowUp: !this.state.showArrowUp })
  }

  render() {
    return (
      <div
        css={mq({
          padding: ".5rem",
        })}
      >
        {this.props.showArrow ? (
          <div
            css={navTabStyle}
            onMouseOver={() => this.showArrowUp()}
            onMouseOut={() => this.showArrowUp()}
          >
            {this.props.displayText.toUpperCase()}
            <FontAwesomeIcon
              css={{
                fontSize: "0.6rem",
                paddingLeft: ".4rem",
                paddingBottom: ".05rem",
              }}
              icon={`${this.state.showArrowUp ? "chevron-up" : "chevron-down"}`}
            />
          </div>
        ) : (
          <Link css={navTabStyle} to={this.props.path}>
            {this.props.displayText.toUpperCase()}
          </Link>
        )}
      </div>
    )
  }
}
