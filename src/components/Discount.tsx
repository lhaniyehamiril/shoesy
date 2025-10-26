import { dataCart } from "../features/cart/CartSlice";
import { dataShoes } from "../services/type";

type DiscountProps = {
  data: dataCart | dataShoes | undefined;
};

export const Discount: React.FC<DiscountProps> = ({ data }) => {
  return (
    <div className="flex items-center gap-2">
      {data && (
        <>
          {data.discount > 0 && <span>${data.price - data.discount}</span>}
          <span
            className={`${
              data.discount > 0 ? "text-gray-500 line-through text-[13px]" : ""
            }`}
          >
            ${data.price}
          </span>
        </>
      )}
    </div>
  );
};
