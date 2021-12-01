import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltAction from '@mui/icons-material/ListAlt';
import PermIndentifyIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@material-ui/core'

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon/>

      {/* Sidebar Elements */}
      <SidebarOption active Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={SearchIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
      <SidebarOption Icon={ListAltAction} text="Lists"/>
      <SidebarOption Icon={PermIndentifyIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar
