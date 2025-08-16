import { Input } from "../../ui/StyleComponents";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

type inputInfoProps = {
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  register: UseFormRegisterReturn;
  placeholder: string;
};

export const InputInfo: React.FC<inputInfoProps> = ({
  errors,
  register,
  placeholder,
}) => {
  return (
    <Input
      type="text"
      className={`${errors ? "bg-[#ff7777]" : "bg-[var(--color-purple)]"}`}
      placeholder={placeholder}
      {...register}
    />
  );
};
