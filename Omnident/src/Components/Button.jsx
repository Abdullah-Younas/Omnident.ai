import React, { useState } from "react";

const Button = ({ Text, onClick }) => {
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

  const handleClick = (e) => {
    setClicked(true); // grows once and stays
    if (onClick) onClick(e); // run the action passed from App.jsx
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={handleClick}
      className="relative overflow-hidden border-2 border-ButtonLight text-white font-bold py-1 px-3 rounded"
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
              ? "translate(-50%, -50%) scale(8)"
              : "translate(-50%, -50%) scale(1)",
            transition: "transform 0.4s ease-out",
          }}
        />
      )}

      <span className="relative z-10">{Text}</span>
    </button>
  );
};

export default Button;
