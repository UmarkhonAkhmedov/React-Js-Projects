import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOulineIcon from '@mui/icons-material/ChatBubbleOutline';
import Repeaticon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Rafeh Qazi{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge"/>
              </span>
            </h3>
          </div>
          <div className="post__description">
              <p>I challenge you to build a Twitter Clone with React!!!</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt=""/>
        <div className="post__footer">
          <ChatBubbleOulineIcon fontSize="small"/>
          <Repeaticon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
  )
}

export default Post
