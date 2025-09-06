// Components/ScrambleText.jsx
import { useRef } from "react";

const ScrambleText = ({ text, className }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const el = ref.current;
    const original = text;
    let iterations = 0;

    clearInterval(el.scrambleInterval);

    el.scrambleInterval = setInterval(() => {
      el.innerText = original
        .split("")
        .map((char, index) => {
          if (index < iterations) {
            return original[index];
          }
          return char === " "
            ? " "
            : letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iterations >= original.length) {
        clearInterval(el.scrambleInterval);
      }

      iterations += 0.5; // speed
    }, 20);
  };

  return (
    <h1
      ref={ref}
      className={className}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </h1>
  );
};

export default ScrambleText;
