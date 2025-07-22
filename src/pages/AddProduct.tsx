import { AddProductForm } from "../features/addProduct/AddProductForm";
import { NavApp } from "../features/navbar/NavApp";

export const AddProduct = () => {
  return (
    <div className="pb-32">
      <NavApp />
      <AddProductForm />
    </div>
  );
};
