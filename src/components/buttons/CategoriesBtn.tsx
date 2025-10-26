import { ComponentProps } from "react";
import tw from "tailwind-styled-components";

type ButtonProps = ComponentProps<"button"> & {
  children?: React.ReactNode;
  $isActive?: boolean;
};

const StyleButton = tw.button`
    bg-transparent
    cursor-pointer
    flex 
    items-center
    justify-center
    border-[var(--color-purple)] 
    border-1
    border-solid
    rounded-3xl
    py-2
    px-3
    flex-shrink-0
    hover:bg-[var(--color-purple)]
    ${(props) =>
      props.$isActive ? "bg-[var(--color-purple)]" : "bg-transparent"}
`;

export const CategoriesBtn: React.FC<ButtonProps> = ({
  onClick,
  children,
  $isActive,
}) => {
  return (
    <StyleButton $isActive={$isActive} onClick={onClick}>
      {children}
    </StyleButton>
  );
};
