import React, { Component } from "react"
import mq from "../../../styling/media-queries"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SocialMediaLinks } from "../../common/social-media-links"
import { colors } from "../../../styling/colors"

type MobileNavbarState = {
  navbarActivated: boolean
}

class MobileNavbar extends Component<{}, MobileNavbarState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      navbarActivated: false,
    }
  }

  navToggle = () => {
    if (this.state.navbarActivated) {
      document.getElementById("nav-tabs").style.top = "-10vh"
    } else {
      document.getElementById("nav-tabs").style.top = "7.5vh"
    }
    this.setState({ navbarActivated: !this.state.navbarActivated })
  }

  render() {
    return (
      <div
        css={mq({
          display: ["flex", "none"],
          color: "white",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          background: colors.navbarBackground,
          zIndex: 100,
        })}
      >
        <SocialMediaLinks
          styling={mq({
            width: "100%",
            paddingLeft: "1rem",
            marginTop: "1rem",
            fontSize: "1.25rem",
            zIndex: 100,
          })}
          textColor={colors.navbarText}
        />
        <div
          css={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <FontAwesomeIcon
            css={{
              color: colors.navbarText,
              fontSize: "1.5rem",
              marginTop: ".8rem",
              cursor: "pointer",
              zIndex: 100,
            }}
            icon={this.state.navbarActivated ? "times" : "align-right"}
            onClick={() => this.navToggle()}
          />
        </div>
      </div>
    )
  }
}

export default MobileNavbar
