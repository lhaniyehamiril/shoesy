import { useState } from "react";
import { Spinner } from "./Spinner";

type ImgWithLoader = {
  src: string | undefined;
  alt: string | undefined;
  classImg?: string;
  className: string;
  borderColor?: string;
};

export const ImgWithLoader: React.FC<ImgWithLoader> = ({
  src,
  alt,
  classImg,
  className,
  borderColor,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute  inset-0 flex items-center justify-center z-10">
          <Spinner />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        className={`object-cover w-full h-full select-none transition-opacity duration-300 ${classImg} ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${borderColor ? borderColor : ""}`}
      />
    </div>
  );
};
