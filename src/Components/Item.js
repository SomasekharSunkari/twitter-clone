import React from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import "../Components/styles/Item.css";
const Item = ({ logo, AccoutName, Date, summary, img }) => {
  return (
    <>
      <div className="text-white ">
        <div class="flex w-[70%] mx-auto">
          <img
            src={logo}
            className="h-10 w-10 rounded-full mt-4"
            alt="Image Conent"
          />
          <div className="mt-3 ml-5">
            <h1>
              {AccoutName} <span>{Date}</span>
            </h1>

            <p>{summary}</p>
          </div>
        </div>
        <br />
        <img src={img} className="h-[450px] w-[70%] mx-auto img-main" />
        <div className="flex w-[70%] mx-auto pt-5">
          <ModeCommentOutlinedIcon className="flex-1 cursor-pointer scale-75 text-slate-500" />
          <SettingsBackupRestoreOutlinedIcon className="flex-1 cursor-pointer scale-75 text-slate-500" />
          <FavoriteBorderOutlinedIcon className="flex-1 cursor-pointer scale-75 text-slate-500" />
          <EqualizerOutlinedIcon className="flex-1 cursor-pointer scale-75 text-slate-500" />
          <div className="flex-1 justify-self-end">
            <BookmarkBorderOutlinedIcon className="cursor-pointer scale-75 text-slate-500" />
            <IosShareOutlinedIcon className="cursor-pointer scale-75 text-slate-500" />
          </div>
        </div>
      </div>
      {/* Logo */}
      {/* Account name , date of posting*/}
      {/* post Summery */}
      {/* image */}
      {/* icons */}
    </>
  );
};

export default Item;
