import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Sidebaroptions from "./Components/Sidebaroptions";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DvrIcon from "@mui/icons-material/Dvr";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleIcon from "@mui/icons-material/People";
import XIcon from "@mui/icons-material/X";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from "@mui/material";
import React from "react";
import Feed from "./Components/Feed";
import RightSide from "./Components/RightSide";
function App() {
  return (
    <div className="maincomponent max-w-[1300px] pt-3 ml-auto mr-auto h-screen bg-black  ">
      <div className="sidebar__compo border-r-[.2px] border-slate-700 p-4">
        {/* Twitter Fullstack app clone creation */}
        {/* Sideabar */}
        <Sidebar />
        <Sidebaroptions name="Home" Icon={HomeIcon} />
        <Sidebaroptions name="Explore" Icon={ExploreIcon} />
        <Sidebaroptions name="Notifications" Icon={NotificationsIcon} />
        <Sidebaroptions name="Messages" Icon={LocalPostOfficeIcon} />
        <Sidebaroptions name="Grok" Icon={TextSnippetIcon} />
        <Sidebaroptions name="List" Icon={DvrIcon} />
        <Sidebaroptions name="Bookmarks" Icon={BookmarksIcon} />
        <Sidebaroptions name="Communities" Icon={PeopleIcon} />
        {/* <Sidebaroptions name="Profile" Icon={AccountCircleOutlinedIcon} /> */}
        {/* <Sidebaroptions name="X" Icon={XIcon} /> */}
        <Sidebaroptions name="More.." Icon={MoreHorizIcon} />
        <Button className="sidebar__twittebutton ">Post</Button>
      </div>
      {/* Tweets */}
      <div className="feed__compo border-r-[.2px] border-slate-700">
        <Feed />
      </div>

      {/* Widgets */}
      <div className="wid__compo border-r-[.5px]">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
