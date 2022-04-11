import React, { useState } from 'react'
import NavBar from './Navbar/NavBar'
import { useHttp } from '../hooks/http.hook'

const AuthPage = () => {
   const {loading, request} = useHttp()
   const [form, setForm] = useState({
      email: '',password: ''
   })

   const changeHandler = event => {
      setForm({...form, [event.target.name]:event.target.value})
   }

   const registerHandler = async () => {
      try {
         const data = await request('/', 'POST', { ...form })
         console.log("Data",data)
      }catch(e) {}
   }

   return (
      <div className="AuthPage container">
         <NavBar title={"Sign In"} link={ "/register" }/>
         <div className="glass auth">
         <form action="">
            <h4>Profilga kirish</h4>
               <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={changeHandler}
               />
               <input
                  type="password"
                  placeholder="Parol"
                  name="password"
                  onChange={changeHandler}
               />
               <div>
                  <a
                     href="/register"
                     disabled={loading}
                  >
                     Profilingiz yo'qmi ?
                  </a>
            </div>
               <button
                  type="submit"
                  onClick={registerHandler}
                  disabled={loading}
               >
                  Tasdiqlash
               </button>
         </form>
      </div>
      </div>
   )
}

export default AuthPage