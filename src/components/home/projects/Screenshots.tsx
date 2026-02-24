import React, { useEffect, useState } from "react";
import styles from "./styles/Screenshots.module.scss"; // Use your existing custom styles

type ScreenshotsProps = {
  images: Array<string>;
  screenshotsAvailable: boolean;
};

const Screenshots = ({ images, screenshotsAvailable }: ScreenshotsProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prevActive) => (prevActive === images.length - 1 ? 0 : prevActive + 1));
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className={`relative h-48 overflow-hidden rounded-lg bg-gray-100 ${styles.imageWrapper}`}>
      {images.map((image, index) => (
        <div
          key={image}
          style={{ backgroundImage: `url(${image})` }}
          className={`transition-opacity duration-500 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          } absolute inset-0 bg-center bg-cover`}
        />
      ))}
      {!screenshotsAvailable && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-black text-white text-xl">
          Screenshots Coming Soon
        </div>
      )}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, id) => (
            <button
              key={id}
              className={`h-3 w-3 rounded-full ${
                id === active ? "bg-blue-600" : "bg-white"
              } border border-blue-600`}
              onClick={() => setActive(id)}
              aria-label={`Show screenshot ${id + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Screenshots;