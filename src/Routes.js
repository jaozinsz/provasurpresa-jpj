import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import VendaAcai from './pages/VendaAcai'
import Sorveteria from './pages/Sorveteria'
import Signo from './pages/Signo'
import SalarioLiquido from './pages/SalarioLiquido'
import Combustivel from './pages/Combustivel'
import Temperatura from './pages/febre'
import Orcamento from './pages/orcamento'
import Ingresso from './pages/ingresso'
import ContarAtee from './pages/numerosnaturais'
import Linhas from './pages/linhas'
import Retanguloo from './pages/retangulo'
import Cafe from './pages/cafe'
import JurosCompostos from './pages/Juros'


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home/>}></Route>

                <Route path='/VendaAcai' element={<VendaAcai/>}></Route>
                <Route path='/Sorveteria' element={<Sorveteria/>}></Route>
                <Route path='/Signo' element={<Signo/>}></Route>

                <Route path='/SalarioLiquido' element={<SalarioLiquido/>}></Route>
                <Route path='/Combustivel' element={<Combustivel/>}></Route>
                <Route path='/Temperatura' element={<Temperatura/>}></Route>

                <Route path='/orcamento' element={<Orcamento/>}></Route>
                <Route path='/Ingresso' element={<Ingresso/>}></Route>
                <Route path='/contar' element={<ContarAtee/>}></Route>

                <Route path='/linhas' element={<Linhas/>}></Route> 
                <Route path='/retangulo' element={<Retanguloo/>}></Route>
                <Route path='/cafe' element={<Cafe/>}></Route>

                <Route path='/juros' element={<JurosCompostos/>}></Route>
            </Routes>
        
        </BrowserRouter>
    );
}