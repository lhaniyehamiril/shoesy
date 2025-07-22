import { useRef, useState } from "react";

import { Colorful } from "./Colorful";

import { useDisplay } from "../../hooks/useDisplay";
import { useClickOutside } from "../../hooks/useClickOutside";

import { ColorBox } from "./ColorBox";
import { IconPlus } from "../../icons/IconPlus";

type PickerColorProps = {
  colorSelect: string[];
  setColorSelect: React.Dispatch<React.SetStateAction<string[]>>;
};
export const PickerColor: React.FC<PickerColorProps> = ({
  colorSelect,
  setColorSelect,
}) => {
  const { isOpen, setIsOpen } = useDisplay();
  const [color, setColor] = useState("");
  const pickerColorRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setColorSelect((col) => (col.includes(color) ? col : [...col, color]));
    setIsOpen(false);
  };

  const removeColorSelect = (index: number) => {
    setColorSelect((prv) => prv.filter((_, i) => i !== index));
  };

  // close color picker when clicking outside
  useClickOutside(pickerColorRef, () => setIsOpen(false));

  return (
    <div className="flex items-center rounded-3xl p-4 gap-[3px] bg-[var(--color-gray-primary)]  justify-center flex-col w-[90%] min-[400px]:w-[17rem] ">
      <div className="flex items-center relative justify-center w-full gap-1">
        <ColorBox color={color} title="colors" isOpen={isOpen}>
          {!isOpen && (
            <button onClick={() => setIsOpen(true)} className="cursor-pointer">
              <IconPlus />
            </button>
          )}
        </ColorBox>
        <button
          onClick={handleSubmit}
          className="px-9 py-3 bg-[var(--color-purple)] rounded-full cursor-pointer"
        >
          Add
        </button>

        {isOpen && (
          <Colorful
            color={color}
            setColor={setColor}
            pickerColorRef={pickerColorRef}
          />
        )}
      </div>
      <div className="bg-[var(--color-purple)] mt-2 rounded-full p-3 h-12 items-center flex gap-2 w-full overflow-x-auto scroll-hidden">
        {colorSelect?.map((color, index) => (
          <>
            <span
              key={index}
              style={{ background: color }}
              className="inline-block rounded-full w-6 h-6 shrink-0"
            ></span>
            <button
              onClick={() => removeColorSelect(index)}
              className="text-[var(--color-gray-primary)] font-bold cursor-pointer -translate-x-1"
            >
              x
            </button>
          </>
        ))}
      </div>
    </div>
  );
};
