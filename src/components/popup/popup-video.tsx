"use client";
import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

// prop type
type IPropType = {
  isVideoOpen: boolean;
  onHide: () => void;
  videoId: string;
  vimeoPlayer?: boolean;
};

const VideoPopup = ({isVideoOpen,onHide,videoId="TYYf8zYjP5k",vimeoPlayer}:IPropType) => {
  return (
    <ModalVideo
      channel={vimeoPlayer ? "vimeo" : "youtube"}
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={onHide}
      vimeo={vimeoPlayer ? { autoplay: true } : undefined}
    />
  );
};

export default VideoPopup;
