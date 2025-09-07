import { useEffect, useRef, useState } from "react";

const logos = [
  "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b22ceb97ac01e26ef1ee92_denticon%20logo.PNG",
  "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b22ceb97ac01e26ef1ee85_eaglesoft-logo-white-bkg-1200x628-1-ezgif.com-webp-to-png-converter.png",
  "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b22ceb97ac01e26ef1ee8c_Curve%20Dental%20Logo.PNG",
  "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b241a868106b95daf41202_1f3c9cc6aa7254d5c6e85e9310bb5fe2_Untitled%20design.png",
  "https://cdn.prod.website-files.com/68ae4094133a128ca0ec6445/68b22ceb97ac01e26ef1ee8a_LogoBigO_Software_500x180.png",
];

export default function IntegrationScroller() {
  const scrollerRef = useRef(null);
  const [clonedLogos, setClonedLogos] = useState([]);

  useEffect(() => {
    const containerWidth = scrollerRef.current.offsetWidth;
    const singleSetWidth = scrollerRef.current.scrollWidth / 2; // first set
    const repeatCount = Math.ceil(containerWidth / singleSetWidth) + 1;

    const temp = [];
    for (let i = 0; i < repeatCount; i++) {
      temp.push(...logos);
    }
    setClonedLogos(temp);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <ul
        ref={scrollerRef}
        className="flex whitespace-nowrap animate-scroll hover:pause"
      >
        {clonedLogos.map((src, index) => (
          <li key={index} className="inline-block px-4">
            <img
              src={src}
              alt=""
              className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        .animate-scroll {
          display: flex;
          gap: 1rem;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll.pause:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
