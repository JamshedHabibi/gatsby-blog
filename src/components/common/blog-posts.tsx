import React from "react"

const blogPost: React.FC<any> = ({ pageContext }) => {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <p>{pageContext.description}</p>
    </div>
  )
}

export default blogPost
