import React from "react";

const SingleUser = ({ name, SRN, groupNo, img }) => {

  const handleSendMessage = () => {
    // Redirect to the email page when the "Message" button is clicked
    window.location.href = "mailto:1jt20cs121@jyothyit.ac.in";
  };

  return (
    <div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-[#FF7F50] rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 ">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={img}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-white font-semibold">{name}</p>
            <p className="text-black font-medium">Group No: {groupNo}</p>
            <p className="text-black font-medium">{SRN}</p>
          </div>
          <button
            className="px-4 py-1 text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-black hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            onClick={handleSendMessage} // Call handleSendMessage function on button click
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
