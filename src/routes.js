import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import SobreNos from './pages/sobre-nos'
import Plataforma from './pages/plataforma'
import Login from './pages/login'

function RouteComponent() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/plataforma" element={<Plataforma />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default RouteComponent