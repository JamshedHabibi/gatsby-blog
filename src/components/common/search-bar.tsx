import React from "react"
import mq from "../../styling/media-queries"
import { flex } from "../../styling/constants"
import { colors } from "../../styling/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Searchbar: React.FC<any> = () => {
  return (
    <div
      css={[
        flex.rowCentered,
        mq({
          display: ["none", "initial"],
          width: "20%",
          paddingBottom: ".5rem",
        }),
      ]}
    >
      <FontAwesomeIcon
        icon={"search"}
        css={{
          fontSize: ".9rem",
          paddingRight: ".5rem",
          color: colors.mainBlueText,
        }}
      />
      <input
        type="search"
        css={{
          border: "none",
          fontSize: ".8rem",
          "&:focus": {
            outline: "none",
          },
        }}
        placeholder="Type to search..."
      />
    </div>
  )
}
