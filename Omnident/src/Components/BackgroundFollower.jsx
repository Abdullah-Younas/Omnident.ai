import React, { useState, useEffect } from "react";

const BackgroundFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#0B0F14] overflow-hidden">
      {/* circle following mouse */}
      <div
        className="absolute w-300 h-300 pointer-events-none transition-transform duration-150 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,229,255,0.5), rgba(0,229,255,0) 20%)",
          filter: "blur(150px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default BackgroundFollower;
