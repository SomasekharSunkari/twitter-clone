import React from "react";
import FollowItem from "./FollowItem";
// import data from "./data/follow_recommondations";
import FollowData from "./data/follow_recommondations";
const WhoToFollow = () => {
  return (
    <div className=" text-white w-[90%]  bg-slate-800 p-3 ml-2 mt-2 rounded-lg mb-2">
      <h1 className="text-white text-2xl font-bold pb-6">Who to follow</h1>

      <div className="accounts-follow">
        {FollowData.map((item) => {
          return (
            <FollowItem
              Picture={item.Picture}
              Username={item.Username}
              xmail={item.xmail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhoToFollow;
