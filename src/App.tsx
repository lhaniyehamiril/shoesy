import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ProductRefProvider } from "./contexts/ProductRefProvider";
import { ProductFormProvider } from "./contexts/ProductFormProvider";

import { Loading } from "./ui/Loading";

const AppLayout = lazy(() => import("./pages/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const ProductDetailsPhone = lazy(() => import("./pages/ProductDetailsPhone"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Cart = lazy(() => import("./pages/Cart"));
const Order = lazy(() => import("./pages/Order"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
