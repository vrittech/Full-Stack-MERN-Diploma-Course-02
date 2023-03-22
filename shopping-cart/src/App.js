import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import AboutPage from "./pages/About";
import CartPage from "./pages/Cart";
import HomePage from "./pages/Home";
import NoMatchPage from "./pages/NoMatch";
import ProductPage from "./pages/Product";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { getProducts } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
