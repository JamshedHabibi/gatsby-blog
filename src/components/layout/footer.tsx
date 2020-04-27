import React from "react"
import { SocialMediaLinks } from "../social-media-links"
import mq from "../../styling/media-queries"
import { colors } from "../../styling/colors"

type FooterProps = {}
export const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          background: colors.footerBackground,
          paddingTop: "5vh",
          paddingBottom: "9vh",
          width: "100vw",
          color: colors.footerText,
          position: "absolute",
          bottom: "0",
        }}
      >
        © {new Date().getFullYear()}
        {` `}
        BAMBINA KATARINA
      </div>
      <div>
        <SocialMediaLinks
          styling={mq({
            display: "flex",
            width: "100%",
            justifyContent: "center",
            position: "absolute",
            bottom: [".75rem", "1.75rem"],
          })}
          textColor={colors.footerSocialMediaLinks}
        />
      </div>
    </>
  )
}
