import { useRef, useState } from "react";
import { IconUpload } from "../../icons/IconUpload";
import { IconCheckMark } from "../../icons/IconCheckMark";
import { IconCircle } from "../../icons/IconCircle";

type uploadImgProps = {
  text: string;
  handleImgUpload: (type: string, url: string) => void;
};

export const UploadImg: React.FC<uploadImgProps> = ({
  text,
  handleImgUpload,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProgress(10);
      setIsDone(false);

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Img = reader.result as string;
        setTimeout(() => {
          handleImgUpload(text, base64Img);
          setProgress(100);
          setIsDone(true);

          setTimeout(() => {
            setProgress(0);
            setIsDone(false);
          }, 1500);
        }, 2200);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <button
      onClick={handleClick}
      className="relative h-[4.27rem] w-[4.27rem] max-[640px]:w-[30%] rounded-[1.6rem] flex items-center justify-center flex-col shrink-0 overflow-hidden bg-[var(--color-purple)]"
    >
      {progress >= 1 && isDone === false && <IconCircle progress={progress} />}

      <div className=" flex flex-col items-center justify-center">
        {isDone && <IconCheckMark />}
        {!isDone && progress === 0 && (
          <>
            <IconUpload />
            <span className="font-bold text-[13px]">{text}</span>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
    </button>
  );
};
