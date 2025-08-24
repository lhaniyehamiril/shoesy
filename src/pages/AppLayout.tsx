import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
export default function AppLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Toaster
        position="bottom-left"
        richColors
        toastOptions={{
          style: {
            width: "10rem",
            borderRadius: "1.3rem",
            background: "#333",
            border: "none",
            color: "#d2a4ff",
          },
        }}
      />
    </div>
  );
}
