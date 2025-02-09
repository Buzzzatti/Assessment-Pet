import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WebpackPage } from "../pages";

export const AppRouter: React.FC = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/error-boundary" element={<WebpackPage />} />
        <Route path="/error-boundary" element={<WebpackPage />} />
        <Route path="/webpack" element={<WebpackPage />} />
        <Route path="/vite" element={<WebpackPage />} />
      </Routes>
    </BrowserRouter>
  );