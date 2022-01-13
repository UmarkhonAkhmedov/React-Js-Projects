import React from 'react'

const Postcard = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default Postcard

