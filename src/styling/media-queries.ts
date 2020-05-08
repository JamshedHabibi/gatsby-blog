import facepaint from "facepaint"

export const breakpoints = [992, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export default mq
