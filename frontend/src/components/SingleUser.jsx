import React from "react";

const SingleUser = ({ name, SRN, groupNo, img }) => {
  return (
    <div>
      <div class="py-8 px-8 max-w-sm mx-auto bg-[#FF7F50] rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 ">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={img}
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-white font-semibold">{name}</p>
            <p class="text-black font-medium">Group No: {groupNo}</p>
            <p class="text-black font-medium">{SRN}</p>
          </div>
          <button class="px-4 py-1 text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
