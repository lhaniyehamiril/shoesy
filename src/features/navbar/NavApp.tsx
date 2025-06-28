import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

import { user } from "../auth/authSlice";
import { Logout } from "../auth/Logout";

import { NavItem } from "./NavItem";
import { House } from "../../icons/House";
import { Heart } from "../../icons/Heart";
import { IconCart } from "../../icons/IconCart";
import { IconAdd } from "../../icons/IconAdd";

export const NavApp = () => {
  const location = useLocation();
  const username = useAppSelector(user);
  return (
    <div className="z-[999] w-full md:w-28 flex items-center justify-center md:justify-start md:items-center md:h-0 md:fixed md:top-52 md:ml-5">
      <nav className="bg-white flex items-center justify-center fixed z-[999] bottom-0 md:static py-3 md:py-10 w-full">
        <ul className="flex items-center justify-center px-32 md:px-1 gap-6 md:flex-col md:gap-5 w-[75%] min-[438px]:w-32 py-3 md:w-16 md:py-7 bg-[var(--color-gray-primary)] rounded-full">
          <li>
            <NavItem to="/" currentPath={location.pathname} icon={<House />} />
          </li>
          <li>
            <NavItem
              to="/favorite"
              currentPath={location.pathname}
              icon={<Heart width="28" height="28" />}
            />
          </li>
          <li>
            <NavItem
              to="/cart"
              currentPath={location.pathname}
              icon={<IconCart width="28" height="28" />}
            />
          </li>
          <li>
            <NavItem
              to="/product/add"
              currentPath={location.pathname}
              icon={<IconAdd />}
            />
          </li>
          {username && (
            <li className="mt-2">
              <Logout />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
