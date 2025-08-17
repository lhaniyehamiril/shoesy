import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="max-[352px]:text-[12px] text-[15px] w-[93%] sm:w-[30rem] md:mr-15 font-bold p-[1.3rem] pb-2 pt-5 absolute bottom-0 text-white bg-[var(--color-gray-primary)] rounded-t-4xl  items-center flex justify-between">
        <span>
          build by{" "}
          <a
            href="https://github.com/lhaniyehamiril"
            className="text-[var(--color-purple)] underline"
          >
            haniyeh amiri
          </a>
        </span>
        <Logo />
      </div>
    </div>
  );
};
