import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cabinet from './components/Cabinet'
import Test from './components/Test'
import Start from './components/Start'
import Finish from './components/Finish'
import RegisterPage from './components/RegisterPage'
import AuthPage from './components/AuthPage'

export const useRoutes = isAuthenticated => {
      return (
         <Routes>
            <Route path="/home/:id" element={<Home />} />
            <Route path="/cabinet" element={ <Cabinet/> } />
            <Route path="/test" element={ <Test/> } />
            <Route path="/start" element={ <Start/> } />
            <Route path="/finish" element={ <Finish/> } />
            <Route path="*" element={ <Home/> } />
         </Routes>
      )
   return (
      <Routes>
         <Route path="/register" element={ <RegisterPage/> } />
         <Route path="/auth" element={ <AuthPage/> } />
         <Route path="*" element={ <RegisterPage/> } />
      </Routes>
   )
}
//import React from 'react'
//import { Routes, Route } from 'react-router-dom'
//import LinkPage from "./components/LinkPage.js"
//import CreatePage from "./components/CreatePage"
//import DetailPage from "./components/DetailPage"
//import AuthPage from "./components/AuthPage"

//const useRoutes = ()=> {
//      return (
//         <Routes>
//            <Route path="/links" element={<LinkPage />} />
//            <Route path="/create" element={<CreatePage />} />
//            <Route path="/detail/:id" element={<DetailPage />} />
//         </Routes> 
//      )

//   //return (
//   //   <Routes>
//   //      <Route path="/" element={AuthPage} />
//   //      <Route path="*" element={AuthPage} />
//   //   </Routes>
//   //)
//}

//export default useRoutes