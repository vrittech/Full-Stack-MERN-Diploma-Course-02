import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";

const Home = () => <p>Home Page</p>;
const About = () => <p>About Page</p>;
const NoMatch = () => <p>404 not found</p>;

const AdminPanel = () => <p>Admin Panel</p>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="adminpanel"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

/*
header

product lists  page (at list 20 products)

product details page

Add to cart , remove item

cart page (list of user products)

map, filter,reduce, context or redux toolkit, react-boostrap,router,pagination


*/
