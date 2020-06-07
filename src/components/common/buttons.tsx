import React from "react"
import { fonts } from "../../styling/fonts"
import { Link } from "gatsby"
import { colors } from "../../styling/colors"

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
      css={[
        continueReadingBtn ? fonts.lora : fonts.mainPageText,
        {
          textDecoration: "none",
          color: textColor,
          transition: "all 0.3s ease-in-out",
          position: "relative",
          "&:hover": { color: hoverTextColor },
          "&:before": {
            content: "''",
            position: "absolute",
            width: "25%",
            height: "1%",
            bottom: continueReadingBtn ? "-3px" : "3px",
            left: "0",
            backgroundPosition: "left bottom",
            backgroundColor: "rgb(138, 189, 255)",
            transition: "all 0.3s ease-in-out",
          },
          "&:hover:before": {
            visibility: "visible",
            width: "100%",
          },
        },
      ]}
    >
      {buttonText}
    </Link>
  </div>
)
