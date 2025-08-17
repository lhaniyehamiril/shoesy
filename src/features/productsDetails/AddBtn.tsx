import { modal, setModalOpen } from "../auth/authSlice";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { LoginForm } from "../auth/LoginForm";
import { Modal } from "../../ui/Modal";
import { Button } from "../../ui/Button";

type AddBtnProps = {
  handleCart: () => void;
};

export const AddBtn: React.FC<AddBtnProps> = ({ handleCart }) => {
  const isModalOpen = useAppSelector(modal);
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(setModalOpen(false));
  };
  return (
    <>
      <Button classBtn="w-[70%] md:p-3 text-[1.1rem]" onClick={handleCart}>
        Add
      </Button>

      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <LoginForm closeModel={handleCloseModal} />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};
