import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './componentes/Main';
import Dashboard from './componentes/Dashboard';

import './css/nav.css'
import './css/item.css'
import './css/alert.css'
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
