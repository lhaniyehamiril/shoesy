import { dataShoes } from "../../services/type";

type ColorPickerProps = {
  selectedColor: string | undefined;
  setSelectedColor: (color: string) => void;
  product: dataShoes | undefined;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  setSelectedColor,
  product,
}) => {
  return (
    <div className="flex items-center  flex-col -mt-5 px-3 py-7 gap-[1.1rem] overflow-y-auto custom-scroll rounded-full">
      {product?.color?.map((color, index) => (
        <button
          onClick={() => {
            setSelectedColor(color);
          }}
          className={`w-7 h-7 rounded-full cursor-pointer shrink-0 ${
            selectedColor === color
              ? "outline-[var(--color-purple)] outline-2 border-4 border-[var(--color-gray-primary)]"
              : ""
          }`}
          key={index}
          style={{ background: color }}
        ></button>
      ))}
    </div>
  );
};
