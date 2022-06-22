import { Routes, Route } from "react-router-dom";
import { Calculadora } from "../features/Calculadora/Calculadora";
import { Advices } from "../features/Advices/Advices";
import { Link } from "react-router-dom";

export const Router = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <nav>
        <ul>
          <li>
            <Link to="/consejos">Consejos</Link>
          </li>
          <li>
            <Link to="/">Calculadora</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="consejos" element={<Advices />} />
      </Routes>
    </div>
  );
};
