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
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ListCategories from "./pages/admin/ListCategories";
import CreateCategory from "./pages/admin/CreateCategory";
import { getUserData } from "./features/user/userSlice";
import ListProducts from "./pages/admin/ListProducts";
import CreateProduct from "./pages/admin/CreateProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUserData());
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin/categories" element={<ListCategories />} />
        <Route path="admin/categories/create" element={<CreateCategory />} />
        <Route path="admin/products" element={<ListProducts />} />
        <Route path="admin/products/create" element={<CreateProduct />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
