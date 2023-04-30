import React from "react";
//Routing
import Landing from "./pages/Landing";
import Strategy from "./pages/Strategy";
import Forum from "./pages/Forum";
import { Routes, Route } from "react-router-dom";

// 3. Pass the `theme` prop to the `ChakraProvider`
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/Strategy" element={<Strategy />}></Route>
            <Route path="/Forum" element={<Forum />}></Route>
        </Routes>
    );
}