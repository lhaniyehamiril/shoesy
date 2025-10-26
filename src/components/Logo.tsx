import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <span className="block font-wild text-2xl md:text-3xl">
        SH<b className="text-[var(--color-purple)]">O</b>ESY
      </span>
    </Link>
  );
};
