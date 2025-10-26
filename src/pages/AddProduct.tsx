import { useAppSelector } from "../hooks/useAppSelector";

import { user } from "../features/auth/authSlice";

import { AddProductForm } from "../features/addProduct/AddProductForm";
import { Owner } from "../features/addProduct/Owner";
import { NavApp } from "../features/navbar/NavApp";


export default function AddProduct() {
  const userName = useAppSelector(user);
  return (
    <>
      {userName === "im shoesy" && (
        <div className="pb-40 md:pb-0 ">
          <NavApp />
          <div className="mt-8 md:flex min-[1120px]:gap-28 ">
            <div className="md:ml-[8.5rem] md:mt-5 pl-6 md:pl-5 min-[400px]:pl-0">
              <Owner />
            </div>
            <AddProductForm />
          </div>
        </div>
      )}
    </>
  );
}
