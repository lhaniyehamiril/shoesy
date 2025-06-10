import { StyleProps } from "./type";

export const IconUser: React.FC<StyleProps> = ({ classSvg }) => {
  return (
    <svg
      width="23px"
      height="23px"
      className={`${classSvg}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="6" r="4" fill="#333" />
      <ellipse cx="12" cy="17" rx="7" ry="4" fill="#333" />
    </svg>
  );
};
