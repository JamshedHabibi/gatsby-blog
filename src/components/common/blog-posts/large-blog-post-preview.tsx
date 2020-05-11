import React from "react"
import { BlogButton } from "../buttons"
import { colors } from "../../../styling/colors"
import mq from "../../../styling/media-queries"
import { fonts } from "../../../styling/fonts"

const LargeBlogPostPreview: React.FC<any> = ({}) => {
  return (
    <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <img
        css={mq({
          height: ["20rem", "27rem"],
          width: "100%",
          objectFit: "cover",
        })}
        src="/images/travel.jpg"
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
            urlPath={`/blog/travel`}
            buttonText="Bookish"
            textColor={colors.mainBlueText}
            hoverTextColor={colors.mainBlueText}
          />
        </div>
        <div css={mq({ fontSize: ["1.6rem", "1.8rem"] })}>
          the a-z bookish survey
        </div>
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
          April 21st, 2020 • 5 min read
        </div>
        <div css={{ fontSize: "0.8rem", paddingBottom: "1rem" }}>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus quam diam, semper in erat eu, efficitur molestie purus. Sed avelementum mi. Sed interdum mattis risus, sit amet eleifend ligula luctus ut. Sed ullamcorper lorem aliquam, tincidunt lorem et, ultrices est. Suspendisse eleifend dui odio, id volutpat quam iaculis eu. Nunc sit amet scelerisque mauris".slice(
            0,
            250
          ) + "..."}
        </div>
        <div css={{ fontSize: "0.8rem" }}>
          <BlogButton
            urlPath=""
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
