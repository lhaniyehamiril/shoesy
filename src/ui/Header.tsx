import { Logo } from "./Logo";
import { Search } from "../features/searches/Search";

export const Header = () => {
  return (
    <header className="w-full fixed flex right-0 left-0  z-[999] items-center justify-center flex-col bg-white top-0 py-3 gap-2">
      <Logo />
      <Search />
    </header>
  );
};
