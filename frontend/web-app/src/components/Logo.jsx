import React, { useMemo, useRef, useState, useEffect } from "react";

export default function Logo({ fontSize = 70, scale = 1, variant = 0 }) {
  const colors = ["#19029b", "#FFD93D", "#6BCB77", "#4D96FF", "#ae2c2c", "#845EC2"];
  const columns = 20;
  const segmentHeight = 50;
  const textRef = useRef(null);
  const [box, setBox] = useState({ x: 0, y: 0, width: 100, height: 100 });

  // 🔹 Random deterministic pattern based on variant
  const rects = useMemo(() => {
    const arr = [];
    const rng = (seed) => {
      let s = Math.sin(seed) * 10000;
      return s - Math.floor(s);
    };
    let seed = variant * 1000;

    for (let i = 0; i < columns; i++) {
      const x = i * 50;
      for (let j = 0; j < 8; j++) {
        seed += 1;
        const color = colors[Math.floor(rng(seed) * colors.length)];
        const delay = (rng(seed + 1) * 2).toFixed(2);
        const duration = (1 + rng(seed + 2)).toFixed(2);
        const move = (rng(seed + 3) * 40 - 20).toFixed(1);

        arr.push(
          <rect
            key={`${i}-${j}`}
            x={x}
            y={j * segmentHeight}
            width="50"
            height={segmentHeight}
            fill={color}
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values={`0,0; 0,${move}; 0,0`}
              dur={`${duration}s`}
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
          </rect>
        );
      }
    }
    return arr;
  }, [variant]);

  // 🔹 Measure text bounds
  useEffect(() => {
    if (textRef.current) {
      const b = textRef.current.getBBox();
      setBox(b);
    }
  }, [fontSize]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${box.x} ${box.y} ${box.width} ${box.height}`}
      preserveAspectRatio="xMinYMin meet"
      style={{
        display: "block",
        background: "transparent",
        width: `${box.width * scale}px`,
        height: `${box.height * scale}px`,
      }}
    >
      <defs>
        <pattern id="slidePattern" patternUnits="userSpaceOnUse" width="1000" height="400">
          {rects}
        </pattern>
      </defs>

      <text
        ref={textRef}
        x="0"
        y={fontSize}
        fontSize={fontSize}
        fontFamily="sans-serif"
        fill="url(#slidePattern)"
        dominantBaseline="alphabetic"
        textAnchor="start"
      >
        FITFINDER
      </text>
    </svg>
  );
}
