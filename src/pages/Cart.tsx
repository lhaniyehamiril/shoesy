import { user } from "../features/auth/authSlice";
import { cartProduct } from "../features/cart/CartSlice";

import { useAppSelector } from "../hooks/useAppSelector";

import { Header } from "../components/Header";
import { EmptyBox } from "../components/EmptyBox";
import { IconCart } from "../icons/IconCart";

import { NavApp } from "../features/navbar/NavApp";
import { CartList } from "../features/cart/CartList";
import { CheckOutBox } from "../features/cart/CheckOutBox";


export default function Cart() {
  const cart = useAppSelector(cartProduct);
  const username = useAppSelector(user);

  return (
    <div className="pb-20 overflow-hidden h-screen">
      <Header />
      <div className="md:hidden">{cart.length <= 0 && <NavApp />}</div>
      <div className="hidden md:block">
        <NavApp />
      </div>
      {cart.length === 0 && (
        <div className="flex items-center justify-center mt-32 px-3">
          <EmptyBox
            key="empty"
            icon={<IconCart width="45" height="45" color="#c387ff" />}
            name={username}
            message="cart"
          />
        </div>
      )}
      <div className="mt-32 sm:flex sm:justify-center sm:gap-5 px-3 md:mt-44">
        {username && (
          <>
            {cart.length > 0 && (
              <>
                <CartList />
                <CheckOutBox />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
