import React, { useState } from "react";
import ReactPlayer from "react-player";
import Comment from "../../Tabs/Comment";
import Attachment from "../../Tabs/Attachment";
import Doubts from "../../Tabs/Doubts";
import Refrence from "../../Tabs/Refrence";

function ViewLecture() {
  const dummyData = [
    {
      title: "video1",
      description: "this is a very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://youtu.be/YDH7f9dTXAs?si=a76QL1swf1dLRYmv",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const playVideo = (video) => {
    setActiveVideo(video);
    setPlaying(true);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSeek = (seconds) => {
    setPlaying(false);
    setTimeout(() => setPlaying(true), 100);
    activeVideo.ref.seekTo(seconds, "seconds");
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {activeVideo && (
        <div className="w-full  md:w-4/4  flex flex-col items-center bg-gray-900 p-5  ">
          <ReactPlayer
            ref={(player) => {
              activeVideo.ref = player;
            }}
            url={activeVideo.url}
            playing={playing}
            controls
            width="70vw"
            height="90vh"
            className="max-h-[90vh]"
          />
          <div className="mt-5 flex space-x-4">
            <button
              onClick={handlePlayPause}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              onClick={() => handleSeek(activeVideo.ref.getCurrentTime() - 5)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              -5s
            </button>
            <button
              onClick={() => handleSeek(activeVideo.ref.getCurrentTime() + 5)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              +5s
            </button>
            
          </div>

          <ul className="text-white flex gap-5 py-10 ">
            <li>
              <a className="" href="#">
                <button
                  className={`w-full flex items-center  capitalize  `}
                  type="button"
                  onClick={() => handleTabChange("comments")}
                >
                  <li className="p-2 cursor-pointer tracking-wider hover:text-slate-300">Comments</li>
                </button>
              </a>
            </li>
            <li>
              <a className="" href="#">
                <button
                  className={`w-full flex items-center  capitalize `}
                  type="button"
                  onClick={() => handleTabChange("attachments")}
                >
                  <li className="p-2 cursor-pointer tracking-wider hover:text-slate-300">attachments</li>
                </button>
              </a>
            </li>
            <li>
              <a className="" href="#">
                <button
                  className={`w-full flex items-center  capitalize `}
                  type="button"
                  onClick={() => handleTabChange("doubts")}
                >
                  <li className="p-2 cursor-pointer tracking-wider hover:text-slate-300">doubts</li>
                </button>
              </a>
            </li>
            <li>
              <a className="" href="#">
                <button
                  className={`w-full flex items-center  capitalize `}
                  type="button"
                  onClick={() => handleTabChange("refrence")}
                >
                  <li className="p-2 cursor-pointer tracking-wider hover:text-slate-300">refrence</li>
                </button>
              </a>
            </li>
          </ul>

          <div className="">
        
        {activeTab === "comments" && <Comment />}
        {activeTab === "attachments" && <Attachment />}
        {activeTab === "doubts" && <Doubts />}
        {activeTab === "refrence" && <Refrence />}

      </div>
        </div>
      )}

 

      <ul
        className="space-y-5 py-5 mx-auto md:w-1/4"
        style={{ width: "90vw", maxWidth: "60vw" }}
      >
        {dummyData.map((data, i) => (
          <li
            key={i}
            className="flex flex-col md:flex-row items-center shadow-lg gap-5 md:gap-10 px-5 md:px-10 bg-gray-800 rounded-lg hover:bg-slate-400 "
          >
            <div className="flex-shrink-0">
              <button onClick={() => playVideo(data)}>
                <img
                  src={data.thumbnail}
                  alt={data.title}
                  className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 rounded"
                />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-medium mb-2 text-white">
                {data.title}
              </h3>
              <h5 className="text-gray-100 mb-2 text-lg md:text-xl">
                {data.description}
              </h5>
              <p className="text-gray-500">{data.channel}</p>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ViewLecture;
