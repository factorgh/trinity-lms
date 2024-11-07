import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../../src/assets/images/lottie.json"; // Path to your animation file

const LottieComponent = () => {
  const defaultOptions = {
    loop: true, // Set whether the animation should loop
    autoplay: true, // Set whether the animation should autoplay
    animationData: animationData, // Your animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // How the animation is scaled
    },
  };

  return (
    <div className="w-[700px] h-[500px]">
      <Lottie options={defaultOptions} />
      {/* <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Play Animation" : "Pause Animation"}
      </button> */}
    </div>
  );
};

export default LottieComponent;
