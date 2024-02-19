import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Trending = ({ Heading, Hastag, PostCount }) => {
  return (
    <div className="flex flex-col leading-5 mb-2 mt-4">
      <div className="flex justify-between m-0 ">
        <p className="text-gray-400 text-[12px]">{Heading}</p>
        <MoreHorizIcon
          style={{
            color: "slategray",
            transform: "scale-0.8",
            padding: 0,
            cursor: "pointer",
          }}
        />
      </div>
      <div className="mt-[-5px]">
        <h1>{Hastag}</h1>
        <h2 className="text-sm">{PostCount}posts</h2>
      </div>
    </div>
  );
};

export default Trending;
