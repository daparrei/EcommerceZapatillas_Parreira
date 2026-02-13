import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componets/NavBar.jsx'
import ItemListContainer from './componets/ItemListContainer.jsx'
import About from './componets/About.jsx'
import NotFound from './componets/NotFound.jsx';
import ItemDetail from './componets/ItemDetail.jsx';
import { CarProvider } from './context/CarContext.jsx';
import Cart from './componets/Cart.jsx';



function App() {


  return (
    <BrowserRouter>
      <CarProvider>
          <NavBar />
          <Routes> 
            <Route path='/' element={<ItemListContainer greeting={"Bienvenido a ZAPATILLAS QUILMES"} />} />
            <Route path='/about' element={ <About />} />
            <Route path='/product/:id' element={<ItemDetail />} />
            <Route path='/categoria/:category' element={<ItemListContainer greeting={"Bienvenido a ZAPATILLAS QUILMES"} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </CarProvider>
    </BrowserRouter>
  )
}

export default App

