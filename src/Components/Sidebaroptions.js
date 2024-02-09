import React from "react";
import "../Components/styles/sidebar.css";

const Sidebaroptions = ({ name, Icon }) => {
  return (
    <>
      <div className="flex items-center sidebaroptions ml-4 mb-1 hover:bg-zinc-500 w-max px-3 cursor-pointer rounded-full">
        <Icon className="scale-125 " style={{ color: "white" }} />
        <b className="font-normal p-3 text-white">{name}</b>
      </div>
    </>
  );
};

export default Sidebaroptions;
