"use client";

import ImageSlider from "./ImageSlider";

const Slider: React.FC = () => {

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu} className="w-full relative mt-[120px] lg:mt-[160px] grid lg:grid-cols-2 gap-24 rounded-lg overflow-hidden container lg:p-24">
      <ImageSlider image1="/images/photography/1.jpeg" image2="/images/photography/6.jpeg" />
      <ImageSlider image1="/images/photography/2.jpeg" image2="/images/photography/5.jpeg" />
      <ImageSlider image1="/images/photography/3.jpeg" image2="/images/photography/4.jpeg" />
      <ImageSlider image1="/images/photography/4.jpeg" image2="/images/photography/2.jpeg" />
    </div>
  );
};

export default Slider;
