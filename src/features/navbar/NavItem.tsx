import { Link } from "react-router-dom";

type NavItemProps = {
  to: string;
  currentPath: string;
  icon: React.ReactNode;
};

export const NavItem: React.FC<NavItemProps> = ({ to, currentPath, icon }) => {
  const isActive = currentPath === to;
  return (
    <Link to={to}>
      <span
        className={`${isActive ? "text-[var(--color-purple)]" : "text-white"}`}
      >
        {icon}
      </span>
    </Link>
  );
};
