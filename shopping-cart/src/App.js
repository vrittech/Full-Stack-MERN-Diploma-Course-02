import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import AboutPage from "./pages/About";
import CartPage from "./pages/Cart";
import HomePage from "./pages/Home";
import NoMatchPage from "./pages/NoMatch";
import ProductPage from "./pages/Product";

function App() {
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
    </>
  );
}

export default App;
