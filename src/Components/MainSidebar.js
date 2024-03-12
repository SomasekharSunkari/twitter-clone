import React from "react";
import Sidebar from "./Sidebar";
import Sidebaroptions from "./Sidebaroptions";
import { Button } from "@mui/material";
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
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import { Link } from "react-router-dom";
import "../Components/styles/MainSideBar.css";

const MainSidebar = () => {
  return (
    <>
      <Sidebar />
      <div className="options">
        <Link to="/">
          <Sidebaroptions name="Home" Icon={HomeIcon} />
        </Link>
        <Link to="/explore">
          <Sidebaroptions name="Explore" Icon={ExploreIcon} />
        </Link>

        <Link to="/notifications">
          <Sidebaroptions name="Notifications" Icon={NotificationsIcon} />
        </Link>
        <Link to="/messages">
          <Sidebaroptions name="Messages" Icon={LocalPostOfficeIcon} />
        </Link>
        <Link to="/grok">
          <Sidebaroptions name="Grok" Icon={TextSnippetIcon} />
        </Link>
        <Link to="/list">
          <Sidebaroptions name="List" Icon={DvrIcon} />
        </Link>
        <Sidebaroptions name="Bookmarks" Icon={BookmarksIcon} />
        <Sidebaroptions name="Communities" Icon={PeopleIcon} />
        <Sidebaroptions name="Profile" Icon={AccountCircleOutlinedIcon} />
        {/* <Sidebaroptions name="X" Icon={XIcon} /> */}
        <Sidebaroptions name="More.." Icon={MoreHorizIcon} />
      </div>
      <Button className="sidebar__twittebutton ">Post</Button>

      {/* <Sidebaroptions className="post-icon-lap" Icon={PostAddOutlinedIcon} /> */}
      <div className="w-14 h-14 ml-5 post-sm-btn hidden bg-blue-400 rounded-full relative">
        <PostAddOutlinedIcon
          style={{
            color: "white",
            cursor: "pointer",
            transform: "scale(1.5)",
            bacgroundColor: "red",
            position: "absolute",
            left: "16px",
            top: "15px",
          }}
        />
      </div>
    </>
  );
};

export default MainSidebar;
