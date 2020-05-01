import React from "react"
import mq from "../../styling/media-queries"

type HeroImage = {
  imagePath: string
  alternateText: string
}
type PageTitleProps = {
  pageTitle: string
  pageDescription?: string
  image: HeroImage
}

export const PageTitle: React.FC<PageTitleProps> = ({
  pageTitle,
  pageDescription,
  image,
}) => {
  return (
    <div>
      <div css={{ position: "relative", top: "60vh" }}>
        <img
          src={image.imagePath}
          alt={image.alternateText}
          css={mq({
            width: "100%",
            height: ["92vh", "30rem"],
            filter: "brightness(70%)",
          })}
        />
      </div>
      <div css={{ position: "relative", top: "-40vh" }}>
        <div
          css={mq({
            color: "white",
            fontSize: ["2em", "2.5em"],
            display: "flex",
            justifyContent: "center",
          })}
        >
          {pageTitle}
        </div>
        <div
          css={mq({
            color: "white",
            fontSize: ["1.25em", "1.5em"],
            display: "flex",
            justifyContent: "center",
            paddingTop: ".75rem",
          })}
        >
          {pageDescription}
        </div>
      </div>
    </div>
  )
}
