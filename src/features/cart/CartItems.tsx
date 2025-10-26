import { dataCart } from "./CartSlice";

import { ImgWithLoader } from "../../components/ImgWithLoader";
import { Quantity } from "../productsDetails/Quantity";
import { Discount } from "../../components/Discount";
import { IconTrash } from "../../icons/IconTrash";

type CartItemsProps = {
  items: dataCart;
  onRemove: (id: number) => void;
};

export const CartItems: React.FC<CartItemsProps> = ({ items, onRemove }) => {
  return (
    <>
      <div className="flex items-center justify-center shrink-0">
        <div className="bg-[var(--color-purple)] shrink-0 rounded-2xl px-2 h-20">
          <ImgWithLoader
            src={items.image}
            alt={items.name}
            className="w-16 h-20 shrink-0"
          />
        </div>
      </div>
      <div className="flex justify-between w-full max-[340px]:gap-7">
        <div className="flex flex-col mt-1 gap-2 text-white">
          <span className="text-[1rem] whitespace-nowrap">{items.name}</span>
          <Discount data={items} />
          <div className="flex items-center justify-center gap-2 w-[3.3rem] -ml-[0.15rem]">
            <span className="">{items.size}</span>
            <span className="text-[var(--color-purple)]">|</span>
            <span
              className="w-[14px] h-[14px] rounded-full"
              style={{ background: items.mainColor }}
            ></span>
          </div>
        </div>
        <div className="flex gap-2 max-[260px]:pr-2">
          <Quantity flexDir="column" productId={items.id} />
          <button
            onClick={() => onRemove(items.id)}
            className=" bg-[var(--color-purple)] px-1 rounded-full flex items-center justify-center cursor-pointer transition hover:bg-[#c387fff3]"
          >
            <IconTrash strokeColor="#333" />
          </button>
        </div>
      </div>
    </>
  );
};
