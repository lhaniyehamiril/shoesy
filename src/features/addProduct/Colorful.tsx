import { HexColorPicker } from "react-colorful";

type colorFulProps = {
  color: string;
  setColor: (color: string) => void;
  pickerColorRef: React.RefObject<HTMLDivElement | null>;
};

export const Colorful: React.FC<colorFulProps> = ({
  color,
  setColor,
  pickerColorRef,
}) => {
  return (
    <div
      ref={pickerColorRef}
      className="w-b 0  absolute top-16 min-[290px]:left-5 left-0 mt-2 z-50"
    >
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
};
