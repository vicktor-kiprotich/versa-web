import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import ChevronLeft from "../icons/chevron_left";
import ChevronRight from "../icons/chevron_right";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = 7000;
  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    // clearInterval(cI);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  // setInterval(() => {
  //   handleNextSlide();
  // }, timer);

  return (
    <div className='relative'>
      <ChevronLeft
        onClick={handlePrevSlide}
        className='absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-300 z-20'
      />
      <div className='w-full h-[50vh] flex overflow-hidden relative m-auto'>
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className='relative z-10 w-full h-full'
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  src={image}
                  fill='fill'
                  objectFit='contain'
                  className='ease-in-out '
                />
              );
            }
          })}
        </Swipe>
      </div>
      <ChevronRight
        onClick={handleNextSlide}
        className='absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-300 z-20'
      />

      <div className='relative flex justify-center pt-1 p-2'>
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
