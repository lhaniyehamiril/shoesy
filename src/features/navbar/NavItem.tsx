import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  icon: ReactNode;
};

export const NavItem: React.FC<NavItemProps> = ({ to , icon }) => {

  return (
    <NavLink to={to} className={({isActive}) => isActive ? "text-[var(--color-purple)]" : "text-white"}>
        {icon}
    </NavLink>
  );
};
