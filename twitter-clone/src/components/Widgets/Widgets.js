import React from "react";
import "./Widgets.css";
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
// } from "@types/react-twitter-embed";
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SavedSearchOutlinedIcon className="widgets__serachIcon"/>
        <input placeholder="Search Twiiter" type="text"/>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        {/* <TwitterTweetEmbed tweetId={"858551177860055040"}/> */}
        {/* <TwitterTimelineEmbed sourceType="profile" screenName="cleverqazi" options={{height: 400}}/> */}
        {/* <TwitterShareButton url={"https://facebook.com/cleverprogranner"} options={{text: "#reactjs is awesome", via: "cleverqazi"}}/> */}
      </div>
    </div>
  )
}

export default Widgets
