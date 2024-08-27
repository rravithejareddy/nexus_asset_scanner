import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
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
    <div>
      <Home />
    </div>
  );
}

export default App;
