import { Button } from "@mui/material";
import React from "react";
import "../Components/styles/RightSIde.css";
import Trending from "./Trending";
import WhoToFollow from "./WhoToFollow";
import Trendingdata from "../Components/data/Trendingdata";
import SearchIcon from "@mui/icons-material/Search";
const RightSide = () => {
  return (
    <div className="overflow-y-scroll overflow-x-hidden h-full ">
      <div className=" flex w-[90%]  content-center bg-slate-800 ml-2 rounded-full pl-2 p-0.5 hover:cursor-pointer mt-2 ">
        <SearchIcon className="text-slate-400 self-center mx-1 searchicon" />

        <input
          className=" SearchIn   p-2 rounded-full text-sm bg-slate-800  text-white  outline-none  "
          placeholder="Search.."
        />
      </div>
      <div className="subscribe-popup bg-slate-800 text-white w-[90%]  m-2 rounded-md p-3 box-border">
        <h1 className="text-[20px] font-bold">Subscribe to Premium</h1>
        <p>
          Subscribe to unlock new features and if eligible, recive a share of
          ads revenue
        </p>
        <Button className="Subscribe-btn">Subscribe</Button>
      </div>

      <div className="whats-happening ml-2 bg-slate-800 p-2 rounded-md text-white w-[90%]">
        <h1>What's happeing</h1>
        <div className="">
          {Trendingdata.map((item) => (
            <Trending
              Heading={item.heading}
              Hastag={item.Hastag}
              PostCount={item.post_count}
            />
          ))}
        </div>
      </div>
      <div className="Follow-recommandations">
        <WhoToFollow />
      </div>
    </div>
  );
};

export default RightSide;
