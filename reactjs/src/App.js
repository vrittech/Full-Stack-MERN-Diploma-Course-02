import { Route, Routes } from "react-router-dom";
import "./App.css";
import NoMatch from "./pages/NoMatch";
import Post from "./pages/Post";
import PostHome from "./pages/PostHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<PostHome />} />
        <Route path="posts/:postId" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      {/* <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts/:postId" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Routes> */}
    </div>
  );
}

export default App;
