import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import {useRoutes} from './routes'
import LinkPage from './components/LinkPage'
import RegisterPage from './components/RegisterPage'
import DeatilPage from './components/DetailPage'
import AuthPage from './components/AuthPage'
import Home from './components/Home'
import Confirm from './components/Confirm'
import Cabinet from './components/Cabinet'
import Test from './components/Test'
import Start from './components/Start'
import Finish from './components/Finish'
import Admin from './components/Admin/Admin'
import School from './components/Admin/School'
import Sinf from './components/Admin/Sinf'
import Edit from './components/Admin/Edit'
import Upload from './components/Admin/Upload'
function App() {
   const routes = useRoutes(false)
   return (
      <div className="App">
         {routes}
            {/*<Routes>
               <Route path="/home" element={ <Home/> } />
               <Route path="/links" element={ <LinkPage/> } />
               <Route path="/register" element={ <RegisterPage/> } />
               <Route path="/detail" element={ <DeatilPage/> } />
               <Route path="/auth" element={ <AuthPage/> } />
               <Route path="/confirm" element={ <Confirm/> } />
               <Route path="/cabinet" element={ <Cabinet/> } />
               <Route path="/test" element={ <Test/> } />
               <Route path="/start" element={ <Start/> } />
               <Route path="/finish" element={ <Finish/> } />
               <Route path="/admin" element={ <Admin/> } />
               <Route path="/admin/school" element={ <School/> } />
               <Route path="/admin/school/sinf" element={ <Sinf/> } />
               <Route path="/admin/edit" element={ <Edit/> } />
               <Route path="/admin/upload" element={ <Upload/> } />
            </Routes>*/}
      </div>
  );
}

export default App;

