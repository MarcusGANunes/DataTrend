import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import SobreNos from './pages/sobre-nos'
import Plataforma from './pages/plataforma'
import Login from './pages/login'
import EditarPortfolio from './pages/editar-portfolio'
import Resumo from './pages/resumo'
import Crowdfunding from './pages/crowdfunding';

function RouteComponent() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/plataforma" element={<Plataforma />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resumo" element={<Resumo />} />
            <Route path="/editar-portfolio" element={<EditarPortfolio />} />
            <Route path="/crowdfunding" element={<Crowdfunding/>}/>
        </Routes>
    )
}

export default RouteComponent