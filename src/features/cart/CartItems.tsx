import { dataCart } from "./CartSlice";

import { ImgWithLoader } from "../../ui/ImgWithLoader";
import { Quantity } from "../productsDetails/Quantity";
import { Discount } from "../../ui/Discount";

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
            borderColor="border-[var(--color-gray-primary)]"
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
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Iconly/Curved/Delete">
                <g id="Delete">
                  <path
                    id="Stroke 1"
                    d="M18.8892 9.5542C18.8892 17.5732 20.0435 21.198 12.2797 21.198C4.5149 21.198 5.693 17.5732 5.693 9.5542"
                    stroke="#333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Stroke 3"
                    d="M20.3651 6.47985H4.2146"
                    stroke="#333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Stroke 5"
                    d="M15.7148 6.47983C15.7148 6.47983 16.2434 2.71411 12.2891 2.71411C8.33578 2.71411 8.86435 6.47983 8.86435 6.47983"
                    stroke="#333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
