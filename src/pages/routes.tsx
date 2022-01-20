import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { VeiculosCadastro } from "./VeiculosCadastro";
import { VeiculosLista } from "./VeiculosLista";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="veiculos-cadastro" element={<VeiculosCadastro />} />
        <Route path="veiculos-lista" element={<VeiculosLista />} />
      </Routes>
    </BrowserRouter>
  );
}