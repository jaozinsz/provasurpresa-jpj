import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import VendaAcai from './pages/VendaAcai'
import Sorveteria from './pages/Sorveteria'
import Signo from './pages/Signo'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/VendaAcai' element={<VendaAcai/>}></Route>
                <Route path='/Sorveteria' element={<Sorveteria/>}></Route>
                <Route path='/Signo' element={<Signo/>}></Route>
            </Routes>
        
        </BrowserRouter>
    );
}