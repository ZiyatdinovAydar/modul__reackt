import React from 'react';
import './reset.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Products } from './pages/product/product';
import { Bascet } from './pages/bascet/bascets';
import { Registration } from './pages/Registration/registration';
import { Enter } from './pages/enter/enter';
import { Description } from './pages/description/description';
import { useSelector } from 'react-redux';
import { Ordering } from './pages/ordering/ordering';

function Protected({ isUserAuth, children}){
    if(!isUserAuth){
        return <Navigate to = '/enter' replace />
    } 
    return children;
}

function App() {

    const isIndetification = useSelector(state => state.auth.isLoggedIn)
    console.log(isIndetification)

    return ( 
    <BrowserRouter>
    
            <Routes>
                <Route path = "/registration" element = {<Registration />} />
                <Route path = "/enter" element = {<Enter />} />
                
                <Route path = "/" element = {<Protected isUserAuth={isIndetification}><Products /></Protected> } />
                <Route path = "/Bascet" element = {<Protected isUserAuth={isIndetification}><Bascet /></Protected>} />                
                <Route path = "/:paramId" element = {<Protected isUserAuth={isIndetification}><Description /></Protected>} />
                <Route path = "/ordering" element = {<Protected isUserAuth={isIndetification}><Ordering /></Protected>} />
            </Routes>
        
    </BrowserRouter>
    )};

export default App;