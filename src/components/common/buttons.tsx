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
}) => (
  <div css={{ border: "1px solid rgb(0,0,0,0)" }}>
    <Link
      to={urlPath}
      id="blog-post-button"
      css={[
        fonts.lora,
        {
          textDecoration: "none",
          color: textColor,
          transition: "all 0.3s ease-in-out",
          position: "relative",
          "&:hover": { color: hoverTextColor },
          "&:before": {
            content: "",
            position: "absolute",
            width: "25%",
            height: "5%",
            bottom: "-3px",
            left: "0",
            backgroundPosition: "left bottom",
            backgroundColor: hoverTextColor,
            transition: "all 0.3s ease-in-out",
          },
        },
      ]}
    >
      {buttonText}
    </Link>
  </div>
)
