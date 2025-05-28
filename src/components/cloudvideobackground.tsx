// src/components/VideoBackground.tsx
import React from 'react';

// No need for an interface or props if the video source is static
const VideoBackground: React.FC = () => {
  // Define your single video source here.
  // Remember to use the correct relative path if it's in your public folder.
  const videoSource = "/cloudvideobackground.mp4"; 
  // Or if it's a public URL:
  // const videoSource = "https://www.w3schools.com/tags/movie.mp4"; 

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        src={videoSource} // Directly use the hardcoded source
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
    </div>
  );
};

export default VideoBackground;