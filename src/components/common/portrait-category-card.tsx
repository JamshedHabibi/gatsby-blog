import React from "react"
import { Link } from "gatsby"
import { colors } from "../../styling/colors"
import { fonts } from "../../styling/fonts"
import { Button } from "./buttons"
import mq from "../../styling/media-queries"

type PortraitCategoryCardProps = {
  categoryTitle: string
  image: { imagePath: string; alternativeText: string }
}

export const PortraitCategoryCard: React.FC<PortraitCategoryCardProps> = ({
  categoryTitle,
  image,
}) => {
  return (
    <div
      css={mq({
        display: "flex",
        padding: ["1rem 0", "0 .25rem"],
        width: "33.333%",
      })}
    >
      <img
        css={{
          width: "100%",
          height: "30rem",
          objectFit: "cover",
        }}
        src={image.imagePath}
        alt={image.alternativeText}
      />
      <div
        css={mq({
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          width: ["33.2%", "22.7%"],
          height: "69.8%",
          alignItems: "center",
        })}
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
        width: "90%",
        height: "93%",
        border: ".25px solid rgb(255,255,255,0.6)",
        display: "flex",
        position: "relative",
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
