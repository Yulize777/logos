import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import Product from "./pages/product/Product";
import Basket from "./pages/Basket/Basket";
import Delivery from "./pages/delivery/Delivery";
import Register from "./pages/Register/Register";
import Sales from "./pages/sales/Sales";
import Catalog from "./pages/catalog/Catalog";
import AddProduct from "./pages/addProduct/AddProduct";
import "./style.scss"
import Ordering from "./pages/ordering/Ordering";
const App = () => {

    return (
        <>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route path={''} element={<Home/>}/>
                  <Route path={'basket'} element={<Basket/>}/>
                  <Route path={'delivery'} element={<Delivery/>}/>
                  <Route path={'sales'} element={<Sales/>}/>
                  <Route path={'catalog/:category'} element={<Catalog/>}/>
                  <Route path={'product/:id'} element={<Product/>}/>
                  <Route path={'addProduct'} element={<AddProduct/>}/>
                  <Route path={'ordering'} element={<Ordering/>}/>
              </Route>
              <Route path={'/login'} element={<Login/>}/>
              <Route path={'/register'} element={<Register/>}/>
          </Routes>
        </>
    );
};

export default App;