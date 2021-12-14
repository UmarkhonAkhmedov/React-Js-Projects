import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'Umarkhon',
    userImg: 'https://avatars.githubusercontent.com/u/76143018?v=4',
    img: 'https://images3.alphacoders.com/823/thumb-1920-82317.jpg',
    caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON FOR THE YT ALGORITHM!'
  },
  {
    id: '123',
    username: 'Umarkhon',
    userImg: 'https://avatars.githubusercontent.com/u/76143018?v=4',
    img: 'https://images3.alphacoders.com/823/thumb-1920-82317.jpg',
    caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON FOR THE YT ALGORITHM!'
  },
  {
    id: '123',
    username: 'Umarkhon',
    userImg: 'https://avatars.githubusercontent.com/u/76143018?v=4',
    img: 'https://images3.alphacoders.com/823/thumb-1920-82317.jpg',
    caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON FOR THE YT ALGORITHM!'
  }
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
      ))}
    </div>
  )
}

export default Posts
