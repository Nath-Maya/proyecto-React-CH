import React from 'react';
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CarritoCompras } from './componentes/context/CartContext';
import Cart from './componentes/Cart/Cart';






function App() {

  return (

      <BrowserRouter>
        <CarritoCompras>
          <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting="Bienvenido a Wonder Bike"/>}/>
              <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>404 NOT FOUND ERROR</h1>}/>
            </Routes>
        </CarritoCompras>
      </BrowserRouter>

  );
}

export default App;
