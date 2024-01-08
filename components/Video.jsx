import React, { useState, useEffect } from "react";
import { RTCPeerConnection, RTCSessionDescription } from "react-webrtc";

const Video = ({ user, remoteStream }) => {
  const [localStream, setLocalStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => setLocalStream(stream))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="video-container">
      {localStream && <video ref={(ref) => ref.srcObject = localStream} autoPlay muted />}
      {remoteStream && <video ref={(ref) => ref.srcObject = remoteStream} autoPlay />}
    </div>
  );
};

export default Video;
