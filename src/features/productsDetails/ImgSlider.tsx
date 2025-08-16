import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import tw from "tailwind-styled-components";

import { dataShoes } from "../../services/type";
import { ImgWithLoader } from "../../ui/ImgWithLoader";
type SlideImageProps = {
  product: dataShoes | undefined;
};

const ContainerImg = tw.div`
  flex 
  items-center 
  justify-center
  mt-2
  h-50
  border-1
  bg-[var(--color-purple)]
  rounded-[2.3rem]
`;

export const ImgSlider: React.FC<SlideImageProps> = ({ product }) => {
  return (
    <div className="flex items-center justify-center mt-5">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className=" overflow-hidden h-70 max-w-md w-full"
      >
        <SwiperSlide>
          <ContainerImg>
            <ImgWithLoader
              src={product?.images.main}
              alt={product?.name}
              className="w-60 h-60"
            />
          </ContainerImg>
        </SwiperSlide>
        {product?.images.top && (
          <SwiperSlide>
            <ContainerImg>
              <ImgWithLoader
                src={product?.images.top}
                alt={product?.name}
                className="w-48 h-48"
              />
            </ContainerImg>
          </SwiperSlide>
        )}
        {product?.images.under && (
          <SwiperSlide>
            <ContainerImg>
              <ImgWithLoader
                src={product?.images.under}
                alt={product?.name}
                className="w-48 h-48"
                classImg="-mt-1"
              />
            </ContainerImg>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};
