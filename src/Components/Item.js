import React from "react";

const Item = ({ logo, AccoutName, Date, summary, img }) => {
  return (
    <>
      <div className="text-white">
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
        <img src={img} className="h-[450px] w-[70%] mx-auto" />
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
