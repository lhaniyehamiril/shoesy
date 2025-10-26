import { createContext, ReactNode, useContext, useState } from "react";


interface ProductMeta {
    mainColor:string
    colorSelect: string[],
    sizeSelect: number[],
    images: {main: string , under: string , top: string}
}


interface ProductMetaContextType {
 productMeta: ProductMeta;
  setProductMeta: React.Dispatch<React.SetStateAction<ProductMeta>>;
  resetMeta: () => void;
}

const initialMeta : ProductMeta = {
       mainColor: '#333',
      colorSelect: [],
      sizeSelect: [],
      images: {main: '' , under: '', top: ''}
}


const ProductMetaContext = createContext<ProductMetaContextType | null>(null);

 const ProductMetaProvider = ({children}: {children: ReactNode}) => {
 
     const [productMeta , setProductMeta] = useState<ProductMeta>(initialMeta)
 
     const resetMeta= () => setProductMeta(initialMeta)
     
     return <ProductMetaContext.Provider value={{productMeta, setProductMeta, resetMeta}}>
       {children}
     </ProductMetaContext.Provider>
}

const useProductMeta = () => {
    const context = useContext(ProductMetaContext)
    if(!context) throw new Error('useProductMeta should be used inside ProductMetaProvider')
        return context
}

export {useProductMeta, ProductMetaProvider}