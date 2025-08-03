import { Input } from "../../ui/StyleComponents";
type inputInfoProps = {
  errors?: string;
  register: ReturnType<any>;
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
