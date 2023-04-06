import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./components/AdminLayout";
import AdminNavBar from "./components/AdminNavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import UserLayout from "./components/UserLayout";
import AboutPage from "./pages/About";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import ListCategories from "./pages/admin/ListCategories";
import ListOrders from "./pages/admin/ListOrders";
import ListProducts from "./pages/admin/ListProducts";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NoMatchPage from "./pages/NoMatch";
import ProductPage from "./pages/Product";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route
            path=""
            element={
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            }
          />
          <Route path="product/:productId" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<ListCategories />} />
          <Route path="categories/create" element={<CreateCategory />} />
          <Route path="products" element={<ListProducts />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="orders" element={<ListOrders />} />
        </Route>

        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
