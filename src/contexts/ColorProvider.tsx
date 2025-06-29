import { createContext, ReactNode, useContext, useState } from "react";

type contextColorType = {
  color: string;
  setColor: (color: string) => void;
  isOpen: boolean | null;
  setIsOpen: (open: boolean) => void;
};

const ContextColor = createContext<contextColorType | undefined>(undefined);

const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<string>("#f2a0cb");
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  return (
    <ContextColor.Provider value={{ color, setColor, isOpen, setIsOpen }}>
      {children}
    </ContextColor.Provider>
  );
};

const useColor = () => {
  const context = useContext(ContextColor);
  if (!context) throw new Error("useColor should be used in ColorProvider");
  return context;
};

export { ColorProvider, useColor };
