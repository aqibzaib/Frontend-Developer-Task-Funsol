import "./App.css";

import CreationsPage from "./page/CreationsPage";
import MainPage from "./page/MainPage";
import { Route, Routes } from "react-router-dom";
import SlugPage from "./page/CardDetailPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/text-to-image" element={<CreationsPage />} />
        <Route path="/image-details" element={<SlugPage />} />
      </Routes>
    </>
  );
}

export default App;
