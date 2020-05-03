import React, { Component } from "react"
import { SocialMediaLinks } from "../common/social-media-links"
import mq from "../../styling/media-queries"
import { colors } from "../../styling/colors"
import { flex, zIndex } from "../../styling/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fonts } from "../../styling/fonts"

type HeaderProps = {
  headerTitle: string
}

export default class Header extends Component<HeaderProps> {
  componentDidMount() {
    this.changeHeaderHeightOnScroll()
  }
  changeHeaderHeightOnScroll = () => {
    window.onscroll = () => {
      let header = document.getElementById("layout-header")
      let headerUsername = document.getElementById("header-username")
      let scrollPosition = window.pageYOffset
      if (scrollPosition > header.offsetTop) {
        header.style.height = "10vh"
        headerUsername.style.fontSize = "2.4rem"
      } else {
        header.style.height = "18vh"
        headerUsername.style.fontSize = "2.7rem"
      }
    }
  }
  render() {
    return (
      <div
        id="layout-header"
        css={[
          flex.rowCentered,
          mq({
            display: ["none", "none", "flex"],
            width: "100%",
            height: "18vh",
            position: "fixed",
            top: "8vh",
            zIndex: zIndex.layout - 1,
            boxShadow: "0 .25px 25px rgb(235,235,235)",
            transition: "all 0.35s ease-in-out",
            background: "white",
          }),
        ]}
      >
        <div
          css={[
            flex.rowSpacedAround,
            mq({
              height: "100%",
              width: "100%",
              fontSize: ["1.4rem", "2rem"],
            }),
          ]}
        >
          <div css={[flex.rowCentered, { width: "20%" }]}>
            <FontAwesomeIcon
              icon={"search"}
              css={{
                fontSize: ".9rem",
                paddingRight: ".5rem",
                color: colors.headerSocialMediaLinks,
              }}
            />
            <input
              type="search"
              css={{
                border: "none",
                fontSize: ".8rem",
                "&:focus": {
                  outline: "none",
                },
              }}
              placeholder="Type to search..."
            />
          </div>
          <div
            id="header-username"
            css={[
              flex.rowCentered,
              fonts.headerUserName,
              {
                width: "40%",
                fontSize: "2.7rem",
                color: "rgb(30,30,30)",
                letterSpacing: ".3rem",
                transition: "all 0.35s ease-in-out",
                whiteSpace: "nowrap",
              },
            ]}
          >
            {this.props.headerTitle}
          </div>
          <div css={[flex.rowCentered, { width: "20%" }]}>
            <SocialMediaLinks
              styling={mq({
                display: "flex",
                fontSize: ["0.8rem", "1rem"],
              })}
              textColor={colors.headerSocialMediaLinks}
            />
          </div>
        </div>
      </div>
    )
  }
}
