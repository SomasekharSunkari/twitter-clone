import React from "react";
import { Button } from "@mui/material";
import "../Components/styles/Feed.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import cam from "./assets/Cam.png";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { postdata } from "./data/posts";
import Item from "./Item";
import { useRef, useEffect } from "react";

const Feed = () => {
  let forubtn = useRef();
  let followbtn = useRef();
  useEffect(() => {
    function hadldforyou() {
      forubtn.current.classList.add("active");
      followbtn.current.classList.remove("active");
    }
    function handlefollow() {
      forubtn.current.classList.remove("active");
      followbtn.current.classList.add("active");
    }
    forubtn.current.addEventListener("click", hadldforyou);
    followbtn.current.addEventListener("click", handlefollow);
  }, []);

  return (
    <div>
      <div>
        <div className="sticky top-0  backdrop-blur-lg   flex border-b-[.5px] border-slate-500 ">
          <Button
            className="flex-1 homw-top  active"
            data-top-btn="foryou"
            ref={forubtn}
          >
            For You
          </Button>
          <Button
            className="flex-1 homw-top"
            data-top-btn="following"
            ref={followbtn}
          >
            Following
          </Button>
          <SettingsOutlinedIcon
            style={{ color: "white" }}
            className="cursor-pointer  relative top-2 right-2 scale-75"
          />
        </div>
      </div>
      <div className="what_happen p-3 border-b-[.2px] pb-4">
        <div className="flex pl-4 pt-3">
          <img src={cam} className="w-10 h-10 rounded-full cursor-pointer" />
          <div className="flex flex-col w-full mr-4">
            <div className=" flex flex-col pt-1 border-b-[1px] pb-4 w-full m-2 mt-0">
              <input
                placeholder="What's happeing ?"
                className="bg-transparent text-white border-none outline-none pl-4 happen-input"
              />
              <div className="flex pt-6 pl-2 cursor-pointer">
                <PublicOutlinedIcon className="text-blue-700 scale-90" />
                <p className="text-blue-700 font-lighter text-sm pt-[.8px] pl-1 ">
                  Every one can replay{" "}
                </p>
              </div>
            </div>
            <div className="flex pl-4 pt-2 w-full relative ">
              <div>
                <GifBoxOutlinedIcon className="text-blue-700 m-[3px] cursor-pointer scale-90" />
                <ChecklistOutlinedIcon className="text-blue-700 m-[3px] cursor-pointer scale-90" />
                <CollectionsOutlinedIcon className="text-blue-700 m-[3px] cursor-pointer scale-90" />
                <EmojiEmotionsOutlinedIcon className="text-blue-700 m-[3px] cursor-pointer scale-90" />
                <AlarmOnOutlinedIcon className="text-blue-700 m-[3px] cursor-pointer scale-90" />
                <LocationOnOutlinedIcon className="text-blue-700 m-[3px] cursor-pointer scale-90" />
              </div>
              <Button className="postbtn rounded-full">Post</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        {postdata.map((item) => (
          <Item
            logo={item.logo}
            AccoutName={item.AccoutName}
            Date={item.Date}
            summary={item.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
