import React, { useState } from "react";

const Button = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = () => {
    setClicked(true); // grows once and stays
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={handleClick}
      className="relative overflow-hidden border-2 border-ButtonLight text-white font-bold py-2 px-6 rounded"
    >
      {hovering && (
        <span
          className="absolute bg-ButtonLight/80 rounded-full pointer-events-none"
          style={{
            width: "20px",
            height: "20px",
            left: pos.x,
            top: pos.y,
            transform: clicked
              ? "translate(-50%, -50%) scale(8)" // grow from center
              : "translate(-50%, -50%) scale(1)", // normal size
            transition: "transform 0.4s ease-out",
          }}
        />
      )}

      <span className="relative z-10">Click Me</span>
    </button>
  );
};

export default Button;
