import { useAppSelector } from "../../hooks/useAppSelector";

import { user } from "../auth/authSlice";
import { Logout } from "../auth/Logout";

import { NavItem } from "./NavItem";
import { House } from "../../icons/House";
import { Heart } from "../../icons/Heart";
import { IconCart } from "../../icons/IconCart";
import { IconAdd } from "../../icons/IconAdd";
import { ReactNode } from "react";

type navItemData = {
  to: string,
  icon: ReactNode
}

export const NavApp = () => {

  const username = useAppSelector(user);

  const navItems : navItemData[] = [
   {to: '/', icon: <House /> },
   {to: '/favorite', icon: <Heart  width="28" height="28"/> },
   {to: '/cart', icon: <IconCart width="28" height="28"/> },
  ]
 
  if (username === "im shoesy") navItems.push({to: '/product/add' , icon: <IconAdd /> })

  return (
    <div className="z-[999] w-full md:w-28 flex items-center justify-center md:justify-start md:items-center md:h-0 md:fixed md:top-52 md:ml-5">
      <nav className="bg-white flex items-center justify-center fixed z-[999] bottom-0 md:static py-3 md:py-10 w-full">
        <ul
          className={`flex items-center justify-center md:px-1 gap-6 md:flex-col md:gap-5 ${
            username
              ? "w-[80%] max-[358px]:w-[90%] min-[438px]:w-[20rem] px-32"
              : " w-[90%] min-[260px]:w-52"
          }  py-3 md:w-16 md:py-7 bg-[var(--color-gray-primary)] rounded-full`}
        >
          {navItems.map((item , i) => 
           <li key={i}>
            <NavItem to={item.to} icon={item.icon} />
           </li>
          )}
      
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
