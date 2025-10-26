import { createContext, useContext, useRef, ReactNode } from "react";


type ProductRefMap = {
  [key: string]: HTMLLIElement | null;
};
type ProductRefContextType = {
  setProductRef: (key: string, ref: HTMLLIElement | null) => void;
  productRefs: { current: ProductRefMap };
};


const ProductRefContext = createContext<ProductRefContextType | undefined>(
  undefined
);

export const ProductRefProvider = ({ children }: { children: ReactNode }) => {
  const productRefs = useRef<ProductRefMap>({});

  const setProductRef = (key: string, ref: HTMLLIElement | null) => {
    productRefs.current[key] = ref;
  };

  return (
    <ProductRefContext.Provider value={{ setProductRef, productRefs }}>
      {children}
    </ProductRefContext.Provider>
  );
};

export const useProductRef = () => {
  const context = useContext(ProductRefContext);
  if (!context) {
    throw new Error("useProductRef must used inside productRefProvider");
  }
  return context;
};
