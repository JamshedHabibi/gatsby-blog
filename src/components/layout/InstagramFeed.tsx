import React, { Component } from "react"
import { InstagramContentProps } from "./instagram-content-props"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type InstagramFeedProps = {
  userId: string
  thumbnailWidth: number
  photoCount: number
}

export default class extends Component<InstagramFeedProps> {
  state = { photos: [] }

  async componentDidMount() {
    try {
      // Hack from https://stackoverflow.com/a/47243409/2217533
      const response = await fetch(
        `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${this.props.userId}","first":${this.props.photoCount},"after":null}`
      )
      const { data } = await response.json()
      console.log(data)
      const photos = data.user.edge_owner_to_timeline_media.edges.map(
        ({ node }: any) => {
          const { id } = node
          const caption = node.edge_media_to_caption.edges[0].node.text
          const thumbnail = node.thumbnail_resources.find(
            (thumbnail: any) =>
              thumbnail.config_width === this.props.thumbnailWidth
          )
          const { src, config_width: width, config_height: height } = thumbnail
          const url = `https://www.instagram.com/p/${node.shortcode}`
          const likes = node.edge_media_preview_like.count
          const comments = node.edge_media_to_comment.count
          return {
            id,
            caption,
            src,
            width,
            height,
            url,
            likes,
            comments,
          }
        }
      )
      this.setState({ photos }, () => console.log(this.state.photos))
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    return (
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
        {this.state.photos &&
          this.state.photos.map((post: any) => {
            return (
              <div
                key={post.id}
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
                <a href={post.url} target="_blank">
                  <img
                    src={post.src}
                    alt={post.caption}
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
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
