import { useState } from "react";
import tw from "tailwind-styled-components";
import { dataShoes } from "../../services/type";
import { ImgWithLoader } from "../../ui/ImgWithLoader";

type SlideImageProps = {
  product: dataShoes | undefined;
};

const Container = tw.div` 
  flex 
  flex-col 
  -mt-10
   max-w-md
   w-full
   `;

const MainImageContainer = tw.div`  
  flex 
  items-center 
  justify-center 
  h-70
  w-full
  rounded-lg`;

const ThumbnailContainer = tw.div`  
  flex 
  gap-2 
  -mt-9
  `;

const Thumbnail = tw.div`
  cursor-pointer
  border-2 
  flex 
  items-center
  justify-center
  bg-[#282727d5]
  hover:border-[#282727d5]
  rounded-[1.2rem]
  transition-all${(p: { $isActive: boolean }) =>
    p.$isActive && "border-[#282727d5]"}`;

export const ImgSlider: React.FC<SlideImageProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.images.main);

  const images = [
    { src: product?.images.main, alt: product?.name },
    ...(product?.images.top
      ? [{ src: product?.images.top, alt: product?.name }]
      : []),
    ...(product?.images.under
      ? [{ src: product?.images.under, alt: product?.name }]
      : []),
  ];

  return (
    <Container>
      <MainImageContainer>
        <ImgWithLoader
          src={mainImage}
          alt={product?.name}
          className="w- h-56 object-contain"
        />
      </MainImageContainer>

      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            $isActive={mainImage === image.src}
            onClick={() => setMainImage(image.src)}
          >
            <ImgWithLoader
              src={image.src}
              alt={image.alt}
              className="w-16 h-16 object-contain"
            />
          </Thumbnail>
        ))}
      </ThumbnailContainer>
    </Container>
  );
};
