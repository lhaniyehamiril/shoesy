import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductRefProvider } from "./contexts/ProductRefProvider";

import AppLayout from "./pages/AppLayout";
import { Home } from "./pages/Home";
import { ProductDetailsPhone } from "./pages/ProductDetailsPhone";
import { Favorite } from "./pages/Favorite";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/Order";
import { AddProduct } from "./pages/AddProduct";

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
          <Route path="product/add" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
