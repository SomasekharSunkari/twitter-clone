import { Button } from "@mui/material";
import React from "react";
import "../Components/styles/follow-card.css";

const FollowItem = ({ Picture, Username, xmail }) => {
  return (
    <div>
      <div className="flex justify-between  text-white h-10 bg-transperant mb-3 ">
        <div className="flex items-center ">
          <img src={Picture} className=" h-10 w-10 rounded-full " />
          <div className="flex flex-col pl-2 leading-[19px] ">
            <h1 className="font-bold">{Username}</h1>
            <h2 className="text-slate-500 text-[13px]">{xmail}</h2>
          </div>
        </div>
        <Button className="follow-card">Follow</Button>
      </div>
    </div>
  );
};

export default FollowItem;
