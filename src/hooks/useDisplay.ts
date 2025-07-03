import { useState } from "react";

export const useDisplay = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  return { isOpen, setIsOpen };
};
