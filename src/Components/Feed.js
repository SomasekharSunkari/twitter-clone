import React from "react";
import { Button } from "@mui/material";
import "../Components/styles/Feed.css";
const Feed = () => {
  return (
    <div>
      <div className="flex">
        <Button className="flex-1 homw-top active">For You</Button>
        <Button className="flex-1 homw-top">Following</Button>
      </div>
      <div className="what_happen"></div>
    </div>
  );
};

export default Feed;
