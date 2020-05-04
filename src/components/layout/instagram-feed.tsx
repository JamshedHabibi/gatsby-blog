import React from "react"
import { InstagramContentProps } from "./instagram-content-props"
import { flex } from "../../styling/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import mq from "../../styling/media-queries"

type InstagramFeedProps = {
  instagramContent: InstagramContentProps
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({
  instagramContent,
}) => (
  <div
    css={[
      {
        width: "100%",
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
      },
    ]}
  >
    {instagramContent.reverse().map((post: InstagramContentProps) => {
      return (
        <div
          css={{
            textDecoration: "none",
            color: "white",
            "&:hover img": {
              filter: "brightness(50%)",
            },
            "&:hover .insta-img-caption": {
              opacity: 1,
            },
          }}
        >
          <a href="https://www.instagram.com/bambinakatarina/" target="_blank">
            <img
              src={post.thumbnails[1].src}
              alt={post.caption}
              key={post.id}
              css={{
                transition: "all 0.2s ease-in-out",
                position: "relative",
                top: "5.8rem",
              }}
            />
          </a>
          <div
            className="insta-img-caption"
            css={[
              {
                opacity: 0,
                textAlign: "center",
                position: "relative",
                top: "-6rem",
                transition: "all 0.2s ease-in-out",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <div>{post.caption}</div>
            <div
              css={{
                paddingTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
                width: "30%",
              }}
            >
              <span>
                <FontAwesomeIcon icon={"heart"} />
                {` `} {post.likes}
              </span>
              <span>
                <FontAwesomeIcon icon={"comment"} />
                {` `}
                {post.comments === null ? "0" : post.comments}
              </span>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)
