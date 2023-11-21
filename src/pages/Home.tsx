import React from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const Home: React.FC = () => {
  const { ref, style } = useScrollFadeIn<HTMLDivElement>({
    direction: "up",
    duration: 1,
    delay: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{ ...style, border: "1px solid black", padding: "20px" }}
    >
      <h2>이번에 성공?!!!!</h2>
    </div>
  );
};

export default Home;
