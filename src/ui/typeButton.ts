import { ComponentProps } from "react";
import tw from "tailwind-styled-components";

export type ButtonProps = ComponentProps<"button"> & {
  children?: React.ReactNode;
  classBtn?: string;
};

export const StyleButton = tw.button`
    outline-none
    border-none
    bg-transparent
    cursor-pointer
    flex 
    items-center
    justify-center
`;
