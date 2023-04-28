import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./component/common/Layout";
import { AddVideo } from "./pages/AddVideo";
import { EditVideo } from "./pages/EditVideo";
import Home from "./pages/Home";
import { Video } from "./pages/Video";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="video/:id" element={<Video />} />
          <Route path="add-video" element={<AddVideo />} />
          <Route path="edit-video/:id" element={<EditVideo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
