import React from "react"
import { Link } from "gatsby"
import { colors } from "../../styling/colors"
import { fonts } from "../../styling/fonts"
import { Button } from "./buttons"

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
          width: "21rem",
          height: "30rem",
          objectFit: "cover",
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
        width: "19rem",
        height: "28rem",
        border: ".25px solid rgb(250,250,250,0.6)",
        position: "relative",
        top: ".9rem",
        left: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        urlPath={`/blog/${title.toLowerCase()}`}
        buttonText={title}
        textColor="black"
        backgroundColor="white"
        hoverBackgroundColor={colors.mainBlueText}
        hoverTextColor="white"
      />
    </div>
  )
}
