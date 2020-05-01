import React from "react"
import { SocialMediaLinks } from "../social-media-links"
import mq from "../../styling/media-queries"
import { colors } from "../../styling/colors"

type FooterProps = {}
export const Footer: React.FC<FooterProps> = () => {
  return (
    <div
      css={mq({
        display: "flex",
        justifyContent: "center",
        flexFlow: "column wrap",
        background: colors.footerBackground,
        paddingTop: ["4vh", "5vh"],
        paddingBottom: ["4vh", "5vh"],
        width: "100vw",
        color: colors.footerText,
      })}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          background: colors.footerBackground,
          color: colors.footerText,
        }}
      >
        © {new Date().getFullYear()}
        {` `}
        BAMBINA KATARINA
      </div>
      <SocialMediaLinks
        styling={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "1rem",
        }}
        textColor={colors.footerSocialMediaLinks}
      />
    </div>
  )
}
