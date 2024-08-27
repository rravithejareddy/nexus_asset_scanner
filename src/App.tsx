import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {

  const [objectId, setObjectId] = useState<any>();
  const location = useLocation();

  console.log("Location url: " + location.pathname)

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const id = pathParts[pathParts.length - 1];
    setObjectId(id);
  }, []);

  return (
    <Routes>
      <Route path="/:objectId" element={<Home objectId={objectId} />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
