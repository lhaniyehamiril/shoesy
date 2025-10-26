import { lazy } from "react";

import { ProductRefProvider } from "./context/ProductRefProvider";
import { ProductFormProvider } from "./features/addProduct/contexts/ProductFormProvider";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import { RouteObject } from "react-router-dom";
import { ProductMetaProvider } from "./features/addProduct/contexts/ProductMetaProvider";

const ProductDetailsPhone = lazy(() => import("./pages/ProductDetailsPhone"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Cart = lazy(() => import("./pages/Cart"));
const Order = lazy(() => import("./pages/Order"));
const AddProduct = lazy(() => import("./pages/AddProduct"));




export const router: RouteObject[] = [
    {path: '/' ,
     element: 
     <ProductRefProvider>
         <AppLayout />
    </ProductRefProvider> ,
    children: [
        {index: true , element: <Home />},
        {path: 'product/:id' , element: <ProductDetailsPhone />},
        {path: 'favorite' , element: <Favorite />},
        {path: 'cart' , element: <Cart />},
        {path: 'order' , element: <Order />},
        {path: 'product/add' ,
         element: 
         <ProductFormProvider>
            <ProductMetaProvider>
                <AddProduct />
            </ProductMetaProvider>
        </ProductFormProvider> 
        }
    ]
   }
  ]