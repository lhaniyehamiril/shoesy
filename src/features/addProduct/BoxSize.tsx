import { useState } from "react";
import { BlackBox, Input } from "../../ui/StyleComponents";

type BoxSizeProps = {
  sizeSelect: number[];
  setSizeSelect: React.Dispatch<React.SetStateAction<number[]>>;
};

export const BoxSize: React.FC<BoxSizeProps> = ({
  sizeSelect,
  setSizeSelect,
}) => {
  const [size, setSize] = useState("");

  const handleSubmit = () => {
    const number = Number(size);
    if (size.trim() && !isNaN(number)) {
      setSizeSelect((prv) => [...prv, number]);
    }

    setSize("");
  };

  const removeSizeSelect = (index: number) => {
    setSizeSelect((prv) => prv.filter((_, i) => i !== index));
  };

  return (
    <BlackBox className="flex items-center w-[88%] justify-center flex-col min-[400px]:w-[17rem] gap-3">
      <div className=" flex gap-1 w-[98%]">
        <Input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Size"
        />
        <button
          onClick={handleSubmit}
          className="px-5 py-3 focus:outline-none bg-[var(--color-purple)] rounded-full w-full cursor-pointer"
        >
          Add
        </button>
      </div>
      <div className="bg-[var(--color-purple)] items-center h-13 rounded-full w-full flex gap-3 pl-5 overflow-x-auto scroll-hidden">
        {sizeSelect?.map((num, index) => (
          <>
            <div className="border-[var(--color-gray-primary)] p-2 px-3 text-[11px] rounded-[1rem] border-dashed border-1">
              {num}
            </div>
            <button
              onClick={() => removeSizeSelect(index)}
              className="-ml-1 cursor-pointer font-bold"
            >
              x
            </button>
          </>
        ))}
      </div>
    </BlackBox>
  );
};
