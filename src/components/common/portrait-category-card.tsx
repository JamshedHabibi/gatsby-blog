import React from "react"
import { Link } from "gatsby"
import { colors } from "../../styling/colors"
import { fonts } from "../../styling/fonts"

type PortraitCategoryCardProps = {
  categoryTitle: string
  image: { imagePath: string; alternativeText: string }
}

export const PortraitCategoryCard: React.FC<PortraitCategoryCardProps> = ({
  categoryTitle,
  image,
}) => {
  return (
    <div css={{ display: "flex", paddingBottom: "1rem" }}>
      <img
        css={{
          width: "17rem",
          height: "25rem",
        }}
        src={image.imagePath}
        alt={image.alternativeText}
      />
      <div css={{ position: "absolute" }}>
        <PortraitCategoryCardContent title={categoryTitle} />
      </div>
    </div>
  )
}

const PortraitCategoryCardContent: React.FC<{ title: string }> = ({
  title,
}) => {
  return (
    <div
      css={{
        width: "15rem",
        height: "23rem",
        border: ".25px solid rgb(250,250,250,0.6)",
        position: "relative",
        top: ".9rem",
        left: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        to={`/blog/${title.toLowerCase()}`}
        css={[
          fonts.categoryCard,
          {
            padding: ".1rem 1.5rem",
            border: "none",
            background: "white",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            textDecoration: "none",
            color: "black",
            "&:hover": {
              background: colors.mainBlueText,
              color: "white",
            },
          },
        ]}
      >
        {title}
      </Link>
    </div>
  )
}
