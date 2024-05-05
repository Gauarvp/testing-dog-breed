import React from "react";

const Training = () => {
  return (
    <div className="px-4 py-8 h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
        Training Videos for Dogs
      </h1>

      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 lg:w-1/3 px-6 h-60 mb-8">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/jFMA5ggFsXU?si=S2oQVEAL0ycsqOxb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-6  h-60 mb-8">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ljZVm63I6SI?si=HKYo3ex-gIcd1_at"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-8 h-60">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/qOoCIlYxLb4?si=rxqGrT9OJapGPDyJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-8 h-60">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tSvfVs4LKyg?si=-sDtzyS1kgaQaBah"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Training;
