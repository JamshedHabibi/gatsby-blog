import React from "react"
import { fonts } from "../../styling/fonts"
import { Link } from "gatsby"
import "./buttons.css"
import { colors } from "src/styling/colors"

type ButtonProps = {
  urlPath: string
  buttonText: string
  textColor: string
  hoverTextColor: string
  backgroundColor?: string
  hoverBackgroundColor?: string
  continueReadingBtn?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  urlPath,
  buttonText,
  textColor,
  backgroundColor,
  hoverBackgroundColor,
  hoverTextColor,
}) => (
  <Link
    to={urlPath}
    css={[
      fonts.categoryCard,
      {
        padding: ".33rem 2rem",
        border: "none",
        background: backgroundColor,
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        textDecoration: "none",
        color: textColor,
        "&:hover": {
          background: hoverBackgroundColor,
          color: hoverTextColor,
        },
      },
    ]}
  >
    {buttonText}
  </Link>
)

export const BlogButton: React.FC<ButtonProps> = ({
  urlPath,
  buttonText,
  textColor,
  hoverTextColor,
  continueReadingBtn,
}) => (
  <div css={{ border: "1px solid rgb(0,0,0,0)" }}>
    <Link
      to={urlPath}
      className={`blog-post-button ${
        continueReadingBtn ? "continueReadingBtn" : "linkToCategory"
      }`}
      css={[
        continueReadingBtn ? fonts.lora : fonts.mainPageText,
        {
          textDecoration: "none",
          color: textColor,
          transition: "all 0.3s ease-in-out",
          position: "relative",
          "&:hover": { color: hoverTextColor },
        },
      ]}
    >
      {buttonText}
    </Link>
  </div>
)
