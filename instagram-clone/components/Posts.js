import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'Umarkhon',
    userImg: 'https://avatars.githubusercontent.com/u/76143018?v=4',
    img: 'https://images3.alphacoders.com/823/thumb-1920-82317.jpg',
    caption: 'Subscribe and destroy the like button for the Youtube algorithms'
  },
  {
    id: '123',
    username: 'Umarkhon',
    userImg: 'https://avatars.githubusercontent.com/u/76143018?v=4',
    img: 'https://images3.alphacoders.com/823/thumb-1920-82317.jpg',
    caption: 'Subscribe and destroy the like button for the Youtube algorithms'
  },
  {
    id: '123',
    username: 'Umarkhon',
    userImg: 'https://avatars.githubusercontent.com/u/76143018?v=4',
    img: 'https://images3.alphacoders.com/823/thumb-1920-82317.jpg',
    caption: 'Subscribe and destroy the like button for the Youtube algorithms'
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
