import tw from "tailwind-styled-components";

export const Input = tw.input`
 rounded-[1.2rem] w-full h-12 focus:outline-0 placeholder:text-gray-600 text-[var(--color-gray-primary)] text-[15px] px-3 bg-[var(--color-purple)]
`;

export const BlackBox = tw.div`bg-[var(--color-gray-primary)] p-5 rounded-3xl`;
