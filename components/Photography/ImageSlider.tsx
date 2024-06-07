"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

interface ImageSliderProps {
  image1: string;
  image2: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ image1, image2 }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((x: number, rect: DOMRect) => {
    const position = Math.max(0, Math.min(x - rect.left, rect.width));
    const percent = Math.max(0, Math.min((position / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.touches[0].clientX, rect);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative  w-full max-w-[600px] aspect-[70/45] m-auto overflow-hidden select-none rounded-xl border-2 lg:border-4 border-white"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "none" }}
    >
      <Image
        alt=""
        fill
        draggable={false}
        priority
        src={image1}
      />
      <div
        className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none rounded-lg"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          fill
          priority
          draggable={false}
          alt=""
          src={image2}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
        style={{
          left: `calc(${sliderPosition}% - 1px)`,
        }}
      >
        <div className="bg-white absolute rounded-full h-2 w-2.5 -left-1 top-[calc(50%-5px)]" />
      </div>
    </div>
  );
};

export default ImageSlider;
