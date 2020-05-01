import React from "react"
import mq from "../styling/media-queries"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type SocialMediaLinksProps = {
  styling: {}
  textColor?: string
  highlightColor?: string
  padding: string | string[]
}

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  styling,
  textColor,
  highlightColor,
  padding,
}) => {
  return (
    <div css={styling}>
      <NavTabSocials
        path="https://twitter.com/ingannikatarina?lang=en"
        displayIcon={["fab", "twitter"]}
        color={textColor}
        highlightColor={highlightColor}
        padding={padding}
      />
      <NavTabSocials
        path="https://www.instagram.com/bambinakatarina/"
        displayIcon={["fab", "instagram"]}
        color={textColor}
        highlightColor={highlightColor}
        padding={padding}
      />

      <NavTabSocials
        path="https://www.youtube.com/channel/UCYwp6yuXeUZBSI6n1RrDMEw"
        displayIcon={["fab", "youtube"]}
        color={textColor}
        highlightColor={highlightColor}
        padding={padding}
      />
    </div>
  )
}

type NavTabSocialsProps = {
  path: string
  displayIcon: IconProp
  color?: string
  highlightColor?: string
  padding: string | string[]
}

const NavTabSocials: React.FC<NavTabSocialsProps> = ({
  path,
  displayIcon,
  color,
  highlightColor,
  padding,
}) => {
  return (
    <div css={mq({ paddingBottom: [".75rem", "0"] })}>
      <a
        href={path}
        target="_blank"
        css={mq({
          color: color,
          paddingRight: padding,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            color: highlightColor,
          },
        })}
      >
        <FontAwesomeIcon icon={displayIcon} />
      </a>
    </div>
  )
}
