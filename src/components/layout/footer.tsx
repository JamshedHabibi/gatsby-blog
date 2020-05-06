import React from "react"
import { SocialMediaLinks } from "../common/social-media-links"
import mq from "../../styling/media-queries"
import { colors } from "../../styling/colors"
import { flex } from "../../styling/constants"
import { fonts } from "../../styling/fonts"

type FooterProps = {
  copyrightName: string
}
export const Footer: React.FC<FooterProps> = ({ copyrightName }) => {
  return (
    <footer
      css={[
        flex.columnCentered,
        {
          background: colors.mainBabyBlue,
          position: "relative",
          top: "100%",
          height: "100%",
        },
      ]}
    >
      <div
        css={[
          flex.rowCentered,
          {
            width: "80%",
            height: "10vh",
          },
        ]}
      >
        <SocialMediaLinks
          styling={[
            flex.rowCentered,
            fonts.footerText,
            {
              width: "60%",
              paddingBottom: "2.5vh",
              paddingTop: "2.5vh",
            },
          ]}
          textColor={colors.mainBlueText}
          footer
        />
      </div>
      <div
        css={[
          flex.rowCentered,
          mq({
            width: "80%",
            height: "10vh",
            color: colors.mainBlueText,
            borderTop: `1px solid ${colors.footerDivider}`,
            flexDirection: ["column", "initial"],
          }),
        ]}
      >
        <div
          css={[
            fonts.footerText,
            mq({
              width: "100%",
              display: "flex",
              justifyContent: ["center", "flex-start"],
              alignItems: "center",
            }),
          ]}
        >
          © {new Date().getFullYear()}
          {`. `}
          {copyrightName}
        </div>
        <div
          css={[
            fonts.footerText,
            mq({
              width: "100%",
              display: ["none", "flex"],
              justifyContent: "flex-end",
              alignItems: "center",
            }),
          ]}
        >
          © {new Date().getFullYear()}
          {`. `}
          CREATED BY JAMSHED HABIBI
        </div>
      </div>
    </footer>
  )
}
