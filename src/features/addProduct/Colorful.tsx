import { useEffect, useRef } from "react";
import { useColor } from "../../contexts/ColorProvider";
import { HexColorPicker } from "react-colorful";

export const Colorful = () => {
  const { setIsOpen, color, setColor } = useColor();
  const pickerColor = useRef<HTMLDivElement | null>(null);
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
  }, [setIsOpen]);
  return (
    <div
      ref={pickerColor}
      className="w-0  absolute top-16 min-[290px]:left-5 left-0 mt-2 z-50"
    >
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
};
