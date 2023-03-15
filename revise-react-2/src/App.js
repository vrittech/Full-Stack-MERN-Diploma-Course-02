import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const Home = () => <p>Home Page</p>;
const About = () => <p>About Page</p>;
const NoMatch = () => <p>404 not found</p>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
