import { useAppNavigate } from "../../hooks/useAppNavigate";
import { StyleButton } from "../../ui/typeButton";
import { IconBack } from "../../icons/IconBack";
type NavigateBtnProps = {
  color: string;
};
export const NavigateBtn: React.FC<NavigateBtnProps> = ({ color }) => {
  const navigate = useAppNavigate();
  return (
    <StyleButton
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      <IconBack color={color} />
    </StyleButton>
  );
};
