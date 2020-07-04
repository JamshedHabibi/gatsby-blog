import React from "react"
import { BlogButton } from "../buttons"
import { colors } from "../../../styling/colors"
import mq from "../../../styling/media-queries"
import { fonts } from "../../../styling/fonts"
import { blogPostProps } from "./large-blog-post-preview"

const SmallBlogPostPreview: React.FC<blogPostProps> = ({ blogPost }) => {
  const { date, body, postType, thumbnail, title, slug } = blogPost
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const postMonth: number = parseInt(date.slice(5, 7))
  const postDateFormatted =
    date.slice(8, 10) + " " + monthNames[postMonth - 1] + " " + date.slice(0, 4)
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingBottom: "3rem",
      }}
    >
      <div css={{ width: "95%" }}>
        <img
          css={mq({
            height: ["15rem", "18rem"],
            width: "100%",
            objectFit: "cover",
          })}
          src={thumbnail}
          alt=""
        />
        <div css={[fonts.mainPageText, { paddingTop: "1rem" }]}>
          <div
            css={{
              color: colors.mainBlueText,
              fontSize: "0.9rem",
              "&:hover": {
                color: colors.mainBabyBlue,
              },
            }}
          >
            <BlogButton
              urlPath={`/blog/${postType}`}
              buttonText={
                postType.slice(0, 1).toUpperCase() + postType.slice(1)
              }
              textColor={colors.mainBlueText}
              hoverTextColor={colors.mainBlueText}
            />
          </div>
          <div css={mq({ fontSize: ["1.6rem", "1.8rem"] })}>{title}</div>
          <div
            css={[
              fonts.lora,
              {
                fontSize: "0.75rem",
                paddingBottom: "1rem",
                color: colors.greyText,
              },
            ]}
          >
            {postDateFormatted}
          </div>
          <div css={{ fontSize: "0.8rem", paddingBottom: "1rem" }}>
            {body.slice(0, 250) + "..."}
          </div>
          <div css={{ fontSize: "0.8rem" }}>
            <BlogButton
              urlPath={slug}
              buttonText="Continue Reading →"
              textColor="black"
              hoverTextColor={colors.mainBlueText}
              continueReadingBtn
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallBlogPostPreview
