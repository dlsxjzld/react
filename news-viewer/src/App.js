import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <Routes>
      {/* optional URL -> Route 2개 */}
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />}></Route>
    </Routes>
  );
};

export default App;
