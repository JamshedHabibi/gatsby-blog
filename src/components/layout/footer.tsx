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
    <div
      css={[
        flex.columnCentered,
        {
          position: "absolute",
          bottom: "0",
          width: "100%",
          background: colors.footerBackground,
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
          textColor={colors.footerText}
          footer
        />
      </div>
      <div
        css={[
          flex.rowCentered,
          {
            width: "80%",
            height: "10vh",
            color: colors.footerText,
            borderTop: `1px solid ${colors.footerDivider}`,
          },
        ]}
      >
        <div
          css={[
            fonts.footerText,
            {
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            },
          ]}
        >
          © {new Date().getFullYear()}
          {`. `}
          {copyrightName}
        </div>
        <div
          css={[
            fonts.footerText,
            {
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            },
          ]}
        >
          © {new Date().getFullYear()}
          {`. `}
          CREATED BY JAMSHED HABIBI
        </div>
      </div>
    </div>
  )
}
