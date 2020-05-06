import React from "react"
import { flex } from "../../styling/constants"
import { colors } from "../../styling/colors"

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
      <div
        css={{
          position: "absolute",
        }}
      >
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
        border: ".5px solid white",
        position: "relative",
        top: ".9rem",
        left: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        css={{
          padding: ".6rem 1.75rem",
          border: "none",
          background: "white",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            background: colors.mainBlueText,
            color: "white",
          },
        }}
      >
        {title}
      </div>
    </div>
  )
}
