import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { ProductRefProvider } from "./contexts/ProductRefProvider";
import { ProductFormProvider } from "./contexts/ProductFormProvider";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";

const ProductDetailsPhone = lazy(() => import("./pages/ProductDetailsPhone"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Cart = lazy(() => import("./pages/Cart"));
const Order = lazy(() => import("./pages/Order"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductRefProvider>
              <AppLayout />
            </ProductRefProvider>
          }
        >
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailsPhone />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route
            path="product/add"
            element={
              <ProductFormProvider>
                <AddProduct />
              </ProductFormProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
