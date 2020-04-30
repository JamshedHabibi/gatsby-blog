import React from "react"
import mq from "../../styling/media-queries"

type PageTitleProps = {
  pageTitle: string
  pageDescription?: string
}

export const PageTitle: React.FC<PageTitleProps> = ({
  pageTitle,
  pageDescription,
}) => {
  return (
    <div>
      <img
        src="https://www.jamesbellphotography.co.uk/blog/wp-content/uploads/2019/04/B0005491.jpg"
        alt="hero"
        css={mq({
          width: "100vw",
          height: "80vh",
          position: "absolute",
          top: ["-5vh", "1vh"],
          filter: "brightness(70%)",
        })}
      />
      <div css={{ position: "relative", top: "28vh" }}>
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
