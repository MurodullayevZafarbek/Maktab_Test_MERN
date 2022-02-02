import React from 'react'
import "materialize-css"
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LinkPage from './components/LinkPage'
import CreatePage from './components/CreatePage'
import DeatilPage from './components/DetailPage'
import AuthPage from './components/AuthPage'
import Home from './components/Home'

function App() {
   return (
      <div className="App">
            <Routes>
               <Route path="/" element={ <Home/> } />
               <Route path="/links" element={ <LinkPage/> } />
               <Route path="/create" element={ <CreatePage/> } />
               <Route path="/detail" element={ <DeatilPage/> } />
               <Route path="/auth" element={ <AuthPage/> } />
            </Routes>
      </div>
  );
}

export default App;
