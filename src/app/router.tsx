import {   Route, Routes } from "react-router-dom";
import { InitialPage, WebpackPage } from "../pages";

export const AppRouter: React.FC = () => (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/error-boundary" element={<WebpackPage />} />
            <Route path="/error-boundary" element={<WebpackPage />} />
            <Route path="/webpack" element={<WebpackPage />} />
            <Route path="/vite" element={<WebpackPage />} />
        </Routes>
);