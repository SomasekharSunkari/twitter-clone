import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import Feed from "./Components/Feed";
import RightSide from "./Components/RightSide";
import MainSidebar from "./Components/MainSidebar";
import Notification from "./Components/MainCompos/Notification";
import Messages from "./Components/MainCompos/Messages";
import Grok from "./Components/MainCompos/Grok";
import Communities from "./Components/MainCompos/Communities";
import Explore from "./Components/MainCompos/Explore";
import Profile from "./Components/MainCompos/Profile";
import BookMarks from "./Components/MainCompos/BookMarks";
function App() {
  return (
    <React.Fragment>
      <div className="maincomponent max-w-[1300px]  ml-auto mr-auto h-screen bg-black  ">
        <div className="sidebar__compo border-r-[.2px] border-slate-700 p-4 ">
          <MainSidebar />
        </div>
        <div className="feed__compo border-r-[.2px] border-slate-700 min-h-screen overflow-scroll">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/bookmarks" element={<BookMarks />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/grok" element={<Grok />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/communities" element={<Communities />} />
          </Routes>
        </div>
        <div className="wid__compo border-r-[.5px]">
          <RightSide />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
