import { dataCart } from "../cart/CartSlice";

import { ImgWithLoader } from "../../components/ImgWithLoader";
import { Discount } from "../../components/Discount";

type OrderItemsProps = {
  items: dataCart;
};
export const OrderItems: React.FC<OrderItemsProps> = ({ items }) => {
  return (
    <li className=" bg-[var(--color-gray-primary)] text-[14px] w-[97%] sm:w-[95%] rounded-3xl p-3 flex gap-3 font-bold overflow-x-auto custom-scroll">
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
      </div>
    </li>
  );
};
