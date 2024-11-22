import React, { useState } from "react";
import "../App.css";

const videos = [
  { src: "/videos/video1.mp4", author: "Author 1" },
  { src: "/videos/video2.mp4", author: "Author 2" },
  { src: "/videos/video3.mp4", author: "Author 3" },
  { src: "/videos/video4.mp4", author: "Author 3" },
];

const QuoteBox = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const playNewVideo = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideo(videos[randomIndex]);
  };

  const tweetVideo = () => {
    const tweetText = `Watch this amazing video by ${currentVideo.author}!`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div
      id="quote-box"
      className="text-center p-4 border rounded bg-light text-dark"
    >
      <video
        id="text"
        src={currentVideo.src}
        controls
        autoPlay
        className="mb-3 w-100"
      ></video>
      <p id="author">Author: {currentVideo.author}</p>
      <button
        id="new-quote"
        className="btn btn-primary mt-3 me-2"
        onClick={playNewVideo}
      >
        Play New Video
      </button>
      <a
        id="tweet-quote"
        href="#"
        className="btn btn-info mt-3"
        onClick={(e) => {
          e.preventDefault();
          tweetVideo();
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Video
      </a>
    </div>
  );
};

export default QuoteBox;
