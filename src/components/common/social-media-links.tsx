import React from "react"
import mq from "../../styling/media-queries"
import { IconLookup } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCmsContentQuery } from "../cms/cms-content-query"

type SocialMediaLinksProps = {
  styling: {}
  textColor?: string
  highlightColor?: string
  footer?: boolean
}

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  styling,
  textColor,
  highlightColor,
  footer,
}) => {
  let socialMediaContent = useCmsContentQuery().socialMedia.nodes[0]
    .childDataJson.socialMedia
  return (
    <div css={styling}>
      {socialMediaContent.map(
        (media: { link: { url: string; name: string } }) => (
          <NavTabSocials
            path={media.link.url}
            key={media.link.url}
            socialMediaName={media.link.name}
            displayIcon={["fab", `${media.link.name.toLowerCase()}`]}
            color={textColor}
            highlightColor={highlightColor}
            footer={footer}
          />
        )
      )}
    </div>
  )
}

type NavTabSocialsProps = {
  path: string
  displayIcon: IconLookup
  color?: string
  highlightColor?: string
  footer: boolean
  socialMediaName: string
}

const NavTabSocials: React.FC<NavTabSocialsProps> = ({
  path,
  displayIcon,
  color,
  highlightColor,
  footer,
  socialMediaName,
}) => {
  return (
    <a
      href={path}
      target="_blank"
      css={mq({
        color: color,
        transition: "all 0.2s ease-in-out",
        whiteSpace: "nowrap",
        textAlign: ["initial", "center"],
        textDecoration: "none",
        paddingRight: ["1.5rem", `${footer ? "0" : "1.25rem"}`],
        width: ["50%", "100%"],
        "&:hover": {
          color: highlightColor,
        },
      })}
    >
      <FontAwesomeIcon
        icon={displayIcon}
        css={mq({ paddingRight: [".5rem", "1rem"] })}
      />
      {footer ? `${socialMediaName}` : null}
    </a>
  )
}
