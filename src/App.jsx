import React from "react";
import { Routes, Route } from "react-router";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<ShopPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
}
