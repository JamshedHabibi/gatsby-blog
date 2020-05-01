import { Interpolation } from "@emotion/css"

const stylesObject = <T>(x: { [k in keyof T]: Interpolation }) => x

export const zIndex = {
  layout: 100,
}

export const flex = stylesObject({
  column: {
    display: "flex",
    flexDirection: "column",
  },
  columnCentered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  rowCentered: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowSpacedAround: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
})
