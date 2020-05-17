import React from "react"
import { colors } from "../styling/colors"
import { Button } from "./common/buttons"
import mq from "../styling/media-queries"
import { flex } from "../styling/constants"

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
      css={[
        flex.rowCentered,
        mq({
          margin: "1rem .5rem",
          width: ["70%", "33.333%"],
          border: "1px solid green",
          backgroundImage: `url(${image.imagePath})`,
          height: ["23rem", "28rem"],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
      ]}
    >
      <div
        css={mq({
          border: ".25px solid rgb(255,255,255,0.6)",
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          width: ["86%", "90%"],
          height: ["90%", "93%"],
        })}
      >
        <Button
          urlPath={`/blog/${categoryTitle.toLowerCase()}`}
          buttonText={categoryTitle}
          textColor="black"
          backgroundColor="white"
          hoverBackgroundColor={colors.mainBlueText}
          hoverTextColor="white"
        />
      </div>
    </div>
  )
}
