import { Toaster } from "sonner"


const CustomToast = () => {
  return (
    <>
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
    </>

  )
}

export default CustomToast
