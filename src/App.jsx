import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componets/NavBar.jsx'
import ItemListContainer from './componets/ItemListContainer.jsx'
import About from './componets/About.jsx'
import NotFound from './componets/NotFound.jsx';
import ItemDetail from './componets/ItemDetail.jsx';


function App() {


  return (
 <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido a ZAPATILLAS QUILMES"} />} />
        <Route path='/about' element={ <About />} />
        <Route path='/product/:id' element={<ItemDetail />} />
        <Route path='/categoria/:category' element={<ItemListContainer greeting={"Bienvenido a ZAPATILLAS QUILMES"} />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
 </BrowserRouter>
  )
}

export default App

