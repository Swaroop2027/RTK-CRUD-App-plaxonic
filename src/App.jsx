import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import UpdatePost from "./pages/UpdatePost";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post" element={<UpdatePost />} />
      </Routes>
    </div>
  );
};

export default App;
