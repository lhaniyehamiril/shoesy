import { ButtonProps } from "../../ui/typeButton";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  classBtn,
}) => {
  return (
    <button
      className={`bg-[var(--color-purple)] rounded-full cursor-pointer whitespace-nowrap py-3 ${classBtn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
