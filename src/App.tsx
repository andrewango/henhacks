import React from "react";
import Landing from "./pages/Landing";
//Routing
import { Routes, Route } from "react-router-dom";

// 3. Pass the `theme` prop to the `ChakraProvider`
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />}></Route>
        </Routes>
    );
}