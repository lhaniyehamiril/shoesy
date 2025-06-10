import { useState } from "react";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "./authSlice";

type LoginFormProps = {
  closeModel: () => void;
};
export const LoginForm: React.FC<LoginFormProps> = ({ closeModel }) => {
  const [userName, setUserName] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName !== "" && userName.length < 5) return;

    if (userName.trim()) {
      dispatch(login(userName));
      setUserName("");
      closeModel();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-center"
      >
        <input
          className="border-none bg-white p-3 text-[14px] w-[98%] rounded-3xl focus:outline-none"
          type="text"
          placeholder="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="bg-[var(--color-gray-primary)] rounded-full text-white px-6 py-3 absolute right-5 text-[14px] cursor-pointer">
          save
        </button>
      </form>
      {userName !== "" && userName.length > 1 && userName.length < 5 ? (
        <span className="text-red-600 text-[12px] pl-3">
          please enter at least 5 characters
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
