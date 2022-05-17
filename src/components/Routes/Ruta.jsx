import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Home from '../Home/Home'
import Layout from '../Layout/Layout'
import Error from '../Error/Error'
import Cart from '../Cart/Cart'
import ItemCount from '../ItemCount/ItemCount'

const Ruta = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ItemListContainer" element={<ItemListContainer />} />
            <Route path="/ItemDetailContainer" element={<ItemDetailContainer />} />
            <Route path="/ItemDetailContainer/:ItemId" element={<ItemDetailContainer />} />
            <Route path="/ItemListContainer/:CategoriaId" element={<ItemListContainer />} />
            <Route path="/Cart" element={<Cart />} />
          </Route>


          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ruta