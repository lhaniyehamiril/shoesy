import { ReactNode } from "react";

type colorBoxProps = {
  title: string;
  color: string;
  isOpen: boolean | null;
  children: ReactNode;
};

export const ColorBox: React.FC<colorBoxProps> = ({
  title,
  isOpen,
  color,
  children,
}) => {
  return (
    <div className="flex items-center gap-2 bg-[var(--color-purple)] w-full h-13 px-3 rounded-full  ">
      <span>{title} : </span>
      {children}
      {isOpen && (
        <button className="mt-1">
          <span
            style={{ background: color }}
            className="inline-block rounded-full w-6 h-6"
          ></span>
        </button>
      )}
    </div>
  );
};
