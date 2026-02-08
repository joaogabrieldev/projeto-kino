import React, { useEffect, useRef, useState } from "react";
import "./Animation.css";
import Loading from "@/pieces/Loading/Loading";

const Animation = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      console.log("Vídeo iniciou");
    };
    const handleEnd = () => {
      console.log("Vídeo terminou");
    };
    setIsLoading(true);

    video.addEventListener("playing", handlePlay);
    video.addEventListener("ended", handleEnd);

    const delayTimer = setTimeout(() => {
      setIsLoading(false);
      video.play().catch((error) => console.error("Erro no autoplay:", error));
    }, 5000);

    return () => {
      clearTimeout(delayTimer);
      video.removeEventListener("playing", handlePlay);
      video.removeEventListener("ended", handleEnd);
    };
  }, []);

  return (
    <div className="animation-wrapper">
      {isLoading && <Loading />}
      <div className="animation-container" style={{ display: isLoading ? "none" : "flex" }}>
        <video ref={videoRef} src="/logo.mp4" muted playsInline className="animation-video" />
      </div>
    </div>
  );
};

export default Animation;
