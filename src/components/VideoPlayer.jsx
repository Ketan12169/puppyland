"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

const VideoPlayer = () => {
  const [isPlayerVisible, setPlayerVisibility] = useState(false);

  const playshort = () => {
    setPlayerVisibility(true);
  };
  const closePlayer = () => {
    setPlayerVisibility(false);
  };
  return (
    <div
      id="videoplayer"
      className="  flex justify-center  items-center flex-col gap-3 relative w-[24rem] h-[32rem] max-[735px]:h-[10rem]"
    >
      <img
        src="/image.png"
        className="w-48 h-48 rounded-full object-cover cursor-pointer min-[734px]:w-80 min-[734px]:h-80 "
      />

      {isPlayerVisible == true && (
        <div className="absolute  flex justify-center items-center top-0 min-[735px]:top-3 ">
          <ReactPlayer
            width="270px"
            height="480px"
            url="https://www.youtube.com/shorts/NBC8carWKQY"
            controls={true}
          />

          <IoArrowBack
            className="text-white absolute top-1 left-1 cursor-pointer  "
            onClick={closePlayer}
          />
        </div>
      )}
      {isPlayerVisible == false && (
        <MdOutlineSlowMotionVideo
          className="bottom-19 absolute text-5xl cursor-pointer min-[1080px]:text-7xl"
          onClick={playshort}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
