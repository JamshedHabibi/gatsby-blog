import React, { Component } from "react"
import { SocialMediaLinks } from "../common/social-media-links"
import mq, { breakpoints } from "../../styling/media-queries"
import { colors } from "../../styling/colors"
import { flex, zIndex } from "../../styling/constants"
import { fonts } from "../../styling/fonts"
import { Searchbar } from "../common/search-bar"

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
      if (screen.width > breakpoints[1]) {
        if (scrollPosition > header.offsetTop) {
          header.style.height = "10vh"
          headerUsername.style.fontSize = "2.4rem"
        } else {
          header.style.height = "18vh"
          headerUsername.style.fontSize = "2.7rem"
        }
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
            width: "100%",
            height: ["10vh", "18vh"],
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
              width: "90%",
              fontSize: ["1.4rem", "2rem"],
            }),
          ]}
        >
          <Searchbar />
          <div
            id="header-username"
            css={[
              flex.rowCentered,
              fonts.headerUserName,
              mq({
                width: "40%",
                fontSize: ["1.8rem", "2.7rem"],
                color: "rgb(30,30,30)",
                letterSpacing: ".3rem",
                transition: "all 0.35s ease-in-out",
                whiteSpace: "nowrap",
              }),
            ]}
          >
            {this.props.headerTitle}
          </div>
          <div
            css={[
              flex.rowCentered,
              mq({ width: "20%", display: ["none", "initial"] }),
            ]}
          >
            <SocialMediaLinks
              styling={mq({
                display: "flex",
                fontSize: ["0.8rem", "1rem"],
                width: "70%",
                position: "relative",
                left: "4vw",
                justifyContent: "flex-end",
              })}
              textColor={colors.mainBlueText}
            />
          </div>
        </div>
      </div>
    )
  }
}
