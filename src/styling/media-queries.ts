import facepaint from "facepaint"

const breakpoints = [556, 768, 992, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export default mq
