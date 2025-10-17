import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments";
import AddComponents from "./pages/AddComment";
import ToggleFavorite from "./pages/ToggleFavorite";
import EditComponents from "./pages/EditComment ";




function App() {
  return (
    <>
        <Router>
        <Routes>
          <Route path="/comments" element={< Comments/>} />
          <Route path="/addComponents" element={< AddComponents/>} />
          <Route path="/ToggleFavorite" element={<ToggleFavorite  />} />
          <Route path="/edit/:id" element={<EditComponents />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
