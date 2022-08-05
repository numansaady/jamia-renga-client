import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import publicRoutes from "./routes/publicRoutes";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Navbar setDark={setDark} dark={dark} />
      <Routes>
        {publicRoutes.map(({ path, Componant }, index) => (
          <Route key={index} path={path} element={<Componant />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
