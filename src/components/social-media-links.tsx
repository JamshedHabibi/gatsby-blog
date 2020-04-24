import React from "react"
import mq from "../styling/media-queries"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type SocialMediaLinksProps = {
  styling: {}
  textColor?: string
  highlightColor?: string
}

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  styling,
  textColor,
  highlightColor,
}) => {
  return (
    <div css={styling}>
      <NavTabSocials
        path="https://twitter.com/ingannikatarina?lang=en"
        displayIcon={["fab", "twitter"]}
        color={textColor}
        highlightColor={highlightColor}
      />
      <NavTabSocials
        path="https://www.instagram.com/bambinakatarina/"
        displayIcon={["fab", "instagram"]}
        color={textColor}
        highlightColor={highlightColor}
      />

      <NavTabSocials
        path="https://www.youtube.com/channel/UCYwp6yuXeUZBSI6n1RrDMEw"
        displayIcon={["fab", "youtube"]}
        color={textColor}
        highlightColor={highlightColor}
      />
    </div>
  )
}

type NavTabSocialsProps = {
  path: string
  displayIcon: IconProp
  color?: string
  highlightColor?: string
}

const NavTabSocials: React.FC<NavTabSocialsProps> = ({
  path,
  displayIcon,
  color,
  highlightColor,
}) => {
  return (
    <div css={mq({ paddingBottom: [".75rem", "0"] })}>
      <a
        href={path}
        target="_blank"
        css={{
          color: color,
          paddingRight: "1em",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            color: highlightColor,
          },
        }}
      >
        <FontAwesomeIcon icon={displayIcon} />
      </a>
    </div>
  )
}
