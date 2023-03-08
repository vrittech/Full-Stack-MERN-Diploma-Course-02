import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      Home Page
      <Link to="/about">About Us</Link>
    </div>
  );
};

export const About = () => {
  return (
    <div>
      About Page
      <Link to="/">About Us</Link>
    </div>
  );
};

export const NoMatch = () => {
  return <div>404 Page</div>;
};
