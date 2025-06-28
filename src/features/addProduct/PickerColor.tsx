import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { IconPlus } from "../../icons/IconPlus";
type PickerColorProps = {
  colorSelect: string[];
  setColorSelect: React.Dispatch<React.SetStateAction<string[]>>;
};
export const PickerColor: React.FC<PickerColorProps> = ({
  colorSelect,
  setColorSelect,
}) => {
  const [color, setColor] = useState<string>("#f2a0cb");
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const pickerColor = useRef<HTMLDivElement | null>(null);

  const handleTriggerPicker = () => {
    if (!isOpen) setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        pickerColor.current &&
        !pickerColor.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setColorSelect((col) => (col.includes(color) ? col : [...col, color]));
  };

  return (
    <div className="flex items-center  rounded-3xl  p-3 gap-[3px] bg-[var(--color-gray-primary)]  justify-center flex-col w-[96%] min-[290px]:w-[16rem] ">
      <div className="flex items-center relative justify-center w-full gap-1">
        <div className="flex items-center gap-2 bg-[var(--color-purple)] w-full md:h-13 justify-center rounded-full py-2 ">
          <span>Colors : </span>
          {!isOpen && (
            <button onClick={() => setIsOpen(true)} className="cursor-pointer">
              <IconPlus />
            </button>
          )}
          {isOpen && (
            <button
              type="button"
              onClick={handleTriggerPicker}
              className="mt-1"
            >
              <span
                style={{ background: color }}
                className="inline-block rounded-full w-6 h-6"
              ></span>
            </button>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-3 bg-[var(--color-purple)] rounded-full cursor-pointer"
        >
          Add
        </button>

        {isOpen && (
          <div
            ref={pickerColor}
            className="w-0  absolute top-13 min-[290px]:left-5 left-0 mt-2"
          >
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        )}
      </div>
      {colorSelect.length > 0 && (
        <div className="bg-[var(--color-purple)] mt-2 rounded-full p-3 flex gap-3 w-full overflow-x-auto scroll-hidden">
          {colorSelect?.map((color) => (
            <span
              style={{ background: color }}
              className="inline-block rounded-full w-6 h-6 shrink-0"
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};
