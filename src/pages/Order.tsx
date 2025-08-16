import { useState } from "react";
import { NavigateBtn } from "../ui/NavigateBtn";
import { OrderForm } from "../features/order/OrderForm";
import { OrderSummary } from "../features/order/OrderSummary";
import { OrderList } from "../features/order/OrderList";
export default function Order() {
  const [show, setShow] = useState(false);
  return (
    <div className=" overflow-hidden">
      <div className="ml-4 mt-4">
        <NavigateBtn color="#333" />
      </div>
      {show === false ? (
        <OrderForm setShow={setShow} />
      ) : (
        <>
          <div className="flex items-center justify-center flex-col">
            <OrderSummary />
            <OrderList />
          </div>
        </>
      )}
    </div>
  );
}
