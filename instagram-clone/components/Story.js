import React from 'react'

function Story({ username }) {
  return (
    <div>
      <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer
      hover:scale-110 transition transform duration-200 ease-out' src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" alt=''/>
      <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story
