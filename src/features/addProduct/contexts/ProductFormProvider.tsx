import { createContext, ReactNode, useContext } from "react";

type productFormType = {
  register: UseFormRegister<dataShoes>;
  reset: UseFormReset<dataShoes>;
  handleSubmit: UseFormHandleSubmit<dataShoes>;
  errors: FieldErrors<dataShoes>;  
};

import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  FieldErrors,
  useForm,
} from "react-hook-form";
import { dataShoes } from "../services/type";
const ProductFormContext = createContext<productFormType | undefined>(
  undefined
);

const ProductFormProvider = ({ children }: { children: ReactNode }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors},
  } = useForm<dataShoes>();
  return (
    <ProductFormContext.Provider
      value={{ register, reset, handleSubmit, errors}}
    >
      {children}
    </ProductFormContext.Provider>
  );
};

const useProductForm = () => {
  const context = useContext(ProductFormContext);
  if (!context)
    throw new Error("useProductForm should be used in ProductFormProvider");
  return context;
};

export { ProductFormProvider, useProductForm };
