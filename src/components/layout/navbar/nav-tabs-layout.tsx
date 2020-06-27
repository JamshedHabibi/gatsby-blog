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
    cursor: "pointer",
    "&:hover": {
      color: colors.highlightNavbarText,
    },
  },
])

type NavTabProps = {
  path?: string
  displayText: string
  showArrow?: boolean
}

export const NavTabLayout: React.FC<any> = () => (
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
        width: ["100%", "40%"],
      })}
    >
      <NavTab path="/" displayText="home" />
      <NavTab path="/about" displayText="about" />
      <NavDropdownTab displayText="categories" />
      <NavDropdownTab displayText="archive" />
    </div>
  </div>
)

const NavTab: React.FC<NavTabProps> = ({ displayText, path }) => {
  return (
    <div
      css={mq({
        padding: ".5rem",
      })}
    >
      <Link css={navTabStyle} to={path}>
        {displayText.toUpperCase()}
      </Link>
    </div>
  )
}

class NavDropdownTab extends Component<NavTabProps, { showArrowUp: boolean }> {
  constructor(props: NavTabProps) {
    super(props)
    this.state = {
      showArrowUp: false,
    }
  }

  activateDropdownMenu = () => {
    this.setState({ showArrowUp: !this.state.showArrowUp }, () => {
      if (this.state.showArrowUp === true) {
        document.getElementById(
          `${this.props.displayText}-dropdown`
        ).style.top = "8vh"
      } else {
        document.getElementById(
          `${this.props.displayText}-dropdown`
        ).style.top = "-30vh"
      }
    })
  }

  render() {
    const { displayText } = this.props
    return (
      <>
        <div
          css={[
            navTabStyle,
            {
              padding: ".5rem",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
            },
          ]}
          onClick={() => this.activateDropdownMenu()}
        >
          {this.props.displayText.toUpperCase()}
          <FontAwesomeIcon
            css={{
              fontSize: "0.6rem",
              paddingLeft: ".4rem",
              paddingTop: ".4rem",
            }}
            icon={`${this.state.showArrowUp ? "chevron-up" : "chevron-down"}`}
          />
          <div
            id={`${displayText}-dropdown`}
            css={[
              {
                position: "absolute",
                top: "-30vh",
                transition: "all 0.2s ease-in-out",
                zIndex: 1,
              },
            ]}
          >
            {displayText === "categories" ? (
              <div
                css={{
                  display: "flex",
                  background: colors.mainBabyBlue,
                  padding: ".5rem",
                  width: "25rem",
                  justifyContent: "space-around",
                }}
              >
                <NavTab displayText="Travel" path="/blog/travel" />
                <NavTab displayText="Lifestyle" path="/blog/lifestyle" />
                <NavTab displayText="Bookish" path="/blog/bookish" />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </>
    )
  }
}
