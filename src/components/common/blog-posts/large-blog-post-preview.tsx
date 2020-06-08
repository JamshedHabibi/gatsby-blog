import React from "react"
import { BlogButton } from "../buttons"
import { colors } from "../../../styling/colors"
import mq from "../../../styling/media-queries"
import { fonts } from "../../../styling/fonts"

export type blogPostProps = {
  blogPost: blogPostPropsContent
}

export type blogPostPropsContent = {
  date: string
  body: string
  postType: string
  thumbnail: string
  title: string
  slug: string
}

const LargeBlogPostPreview: React.FC<blogPostProps> = ({ blogPost }) => {
  const { date, body, postType, thumbnail, title, slug } = blogPost
  return (
    <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <img
        css={mq({
          height: ["20rem", "27rem"],
          width: "100%",
          objectFit: "cover",
        })}
        src={thumbnail}
        alt={title}
      />
      <div css={[fonts.mainPageText, { paddingTop: "1rem" }]}>
        {postType ? (
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
        ) : null}
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
          {date}
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
  )
}

export default LargeBlogPostPreview
