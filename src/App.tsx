import React from "react";
import Landing from "./pages/Landing";
import Strategy from "./pages/Strategy";
import Forum from "./pages/Forum";
import QnA from "./pages/QnA";
import FAQ from "./pages/FAQ";
//Routing
import { Routes, Route } from "react-router-dom";

// 3. Pass the `theme` prop to the `ChakraProvider`
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/Strategy" element={<Strategy />}></Route>
            <Route path="/Forum" element={<Forum />}></Route>
            <Route path="/QnA" element={<QnA />}></Route>
            <Route path="/FAQ" element={<FAQ />}></Route>
        </Routes>
    );
}