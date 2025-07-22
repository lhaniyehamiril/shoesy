import { BlackBox } from "../../ui/StyleComponents";
import { imagesType } from "./types";
import { UploadImg } from "./UploadImg";
type productImgBox = {
  setImages: React.Dispatch<React.SetStateAction<imagesType>>;
  images: imagesType;
};
export const ProductImgBox: React.FC<productImgBox> = ({
  setImages,
  images,
}) => {
  const handleImgUpload = (type: string, url: string) => {
    setImages((prv) => ({ ...prv, [type]: url }));
  };
  return (
    <div className="w-[90%] min-[400px]:w-[17rem] md:w-[17rem]">
      <BlackBox>
        <div className="flex gap-3 items-center justify-center">
          <UploadImg text="main" handleImgUpload={handleImgUpload} />
          <UploadImg text="top" handleImgUpload={handleImgUpload} />
          <UploadImg text="under" handleImgUpload={handleImgUpload} />
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-[90%] md:w-full bg-[var(--color-purple)] rounded-full h-13 mt-3 flex pl-6 items-center gap-2">
            {images.main && (
              <img
                src={images.main}
                className="rounded-xl h-10 w-10 object-cover"
              />
            )}
            {images.top && (
              <img
                src={images.top}
                className="rounded-xl h-10 w-10 object-cover bg-center"
              />
            )}
            {images.under && (
              <img
                src={images.under}
                className="rounded-xl h-10 w-10 object-cover bg-center"
              />
            )}
          </div>
        </div>
      </BlackBox>
    </div>
  );
};
