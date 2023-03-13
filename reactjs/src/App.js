import { useSelector } from "react-redux";
import "./App.css";
import Component1 from "./components/mutilevel/Component1";
import Component4 from "./components/mutilevel/Component4";

function App() {
  const { name, counter } = useSelector((state) => state.app);
  return (
    <div className="App">
      {/* <p>Counter: {counter}</p>
      <p>Name: {name}</p> */}
      <Component4 />

      {/* <Routes>
        <Route path="" element={<PostHome />} />
        <Route path="posts/:postId" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Routes> */}

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
