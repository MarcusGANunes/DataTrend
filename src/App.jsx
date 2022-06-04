import "./App.css";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "react-dom";

import Home from "./pages/home";
import BlockchainPage from "./components/BlockchainPage/BlockchainPage";
import NFTs from "./pages/nfts";
import SmartContracts from "./pages/smartcontracts";
import SobreNos from "./pages/sobre-nos";
import Learning from "./pages/learning";
import Plataforma from "./pages/plataforma";
import Login from "./pages/login";
import Resumo from "./pages/resumo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavbarComponent />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blockchains" element={<BlockchainPage />} />
            <Route path="/nfts" element={<NFTs />} />
            <Route path="/smart-contracts" element={<SmartContracts />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/plataforma" element={<Plataforma />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resumo" element={<Resumo />} />
          </Routes>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
