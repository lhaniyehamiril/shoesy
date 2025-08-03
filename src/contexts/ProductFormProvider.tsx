import { createContext, ReactNode, useContext } from "react";
import {
  FieldErrors,
  FieldValue,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

type productFormType = {
  register: UseFormRegister<FieldValue>;
  reset: UseFormReset<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValue>;
  errors: FieldErrors<FieldValues>;
};

const ProductFormContext = createContext<productFormType | undefined>(
  undefined
);

const ProductFormProvider = ({ children }: { children: ReactNode }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ProductFormContext.Provider
      value={{ register, reset, handleSubmit, errors }}
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
