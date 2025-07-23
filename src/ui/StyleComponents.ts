import tw from "tailwind-styled-components";

export const Input = tw.input`
 rounded-full w-full h-12 focus:outline-0 placeholder:text-gray-600 text-[var(--color-gray-primary)] text-[15px] px-4 bg-[var(--color-purple)]
`;

export const BlackBox = tw.div`bg-[var(--color-gray-primary)] p-4 rounded-3xl font-bold`;
