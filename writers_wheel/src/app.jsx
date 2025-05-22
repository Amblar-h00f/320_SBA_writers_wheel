import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Topics from "./pages/Topics"; 
import TopicDetail from "./pages/TopicDetail";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/topics/:id" element={<TopicDetail />} />
    </Routes>
  );
}