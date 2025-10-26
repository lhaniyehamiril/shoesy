import { Outlet } from "react-router-dom";
import CustomToast from "../components/CustomToast";

export default function AppLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
       <CustomToast />
    </div>
  );
}
