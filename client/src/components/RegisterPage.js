import React from 'react'
import NavBar from './Navbar/NavBar'
const RegisterPage = () => {
   return (
      <div className="Register container">
      <NavBar  title={"Sign Up"} link={ "/auth" }/>
      <div className="glass auth">
         <form action="">
            <h4>Ro'yhatdan o'tish</h4>
            <input type="text" placeholder="Ism" />
            <input type="text" placeholder="Familiya" />
            <input type="text" placeholder="Telefon-raqam" />
            <input type="text" placeholder="Maktab sinf" />
            <input type="text" placeholder="Parol" />
            <input type="text" placeholder="Parolni qayta kiritish" />
            <div>
               <a href="/auth">Profilingiz bormi ?</a>
            </div>
            <button type="submit">Tasdiqlash</button>
         </form>
      </div>
   </div>
   )
}

export default RegisterPage