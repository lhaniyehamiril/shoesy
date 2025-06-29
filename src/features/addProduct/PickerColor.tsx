import { useColor } from "../../contexts/ColorProvider";
import { IconPlus } from "../../icons/IconPlus";
import { Colorful } from "./Colorful";
type PickerColorProps = {
  colorSelect: string[];
  setColorSelect: React.Dispatch<React.SetStateAction<string[]>>;
};
export const PickerColor: React.FC<PickerColorProps> = ({
  colorSelect,
  setColorSelect,
}) => {
  const { isOpen, setIsOpen, color } = useColor();
  const handleTriggerPicker = () => {
    if (!isOpen) setIsOpen(true);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setColorSelect((col) => (col.includes(color) ? col : [...col, color]));
  };
  const removeColorSelect = (index: number) => {
    setColorSelect((prv) => prv.filter((_, i) => i !== index));
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

        {isOpen && <Colorful />}
      </div>
      {colorSelect.length > 0 && (
        <div className="bg-[var(--color-purple)] mt-2 rounded-full p-3 flex gap-2 w-full overflow-x-auto scroll-hidden">
          {colorSelect?.map((color, index) => (
            <>
              <span
                key={index}
                style={{ background: color }}
                className="inline-block rounded-full w-6 h-6 shrink-0"
              ></span>
              <button
                type="button"
                onClick={() => removeColorSelect(index)}
                className="text-[var(--color-gray-primary)] font-bold cursor-pointer -translate-x-1"
              >
                x
              </button>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
