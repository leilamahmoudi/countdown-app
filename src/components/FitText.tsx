import React, { useState, useEffect, useRef } from "react";

interface FitTextProps {
  text: string;
}

const FitText: React.FC<FitTextProps> = ({ text }) => {
  const [fontSize, setFontSize] = useState<number>(16);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const updateFontSize = () => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth;

      const textWidth = textRef.current.offsetWidth;

      if (containerWidth && textWidth) {
        const scale = containerWidth / textWidth;

        setFontSize((prev) => prev * scale);
      } else {
        console.log(
          "Failed to calculate due to missing container or text width"
        );
      }
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateFontSize();
    }, 0);
    window.addEventListener("resize", updateFontSize);

    return () => clearTimeout(timeoutId);
  }, [text, updateFontSize]);

  return (
    <div ref={containerRef}>
      <span
        ref={textRef}
        style={{ fontSize: `${fontSize}px`, whiteSpace: "nowrap" }}
      >
        {text}
      </span>
    </div>
  );
};

export default FitText;
