import React from "react";
import "../Components/styles/sidebar.css";

const Sidebaroptions = ({ name, Icon }) => {
  return (
    <>
      <div className="flex items-center sidebaroptions ml-4  hover: w-max px-3 cursor-pointer rounded-full">
        <Icon className="scale-125 m-3 " style={{ color: "white" }} />
        <b className="font-normal icons-hidden text-white">{name}</b>
      </div>
    </>
  );
};

export default Sidebaroptions;
