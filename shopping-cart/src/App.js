import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar";
import AboutPage from "./pages/About";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import ListCategories from "./pages/admin/ListCategories";
import ListProducts from "./pages/admin/ListProducts";
import CartPage from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NoMatchPage from "./pages/NoMatch";
import ProductPage from "./pages/Product";
import RegisterPage from "./pages/RegisterPage";

function App() {
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
