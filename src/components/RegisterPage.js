import React,{useState} from 'react'
//import { sendUsers } from '../data/api'
import axios from "axios"
import NavBar from './Navbar/NavBar'

const RegisterPage = () => {
   const [user, setuser] = useState({
      name: "",
      lastName: "",
      phonenumber: "",
      school: "",
      password: "",
      password2: "",
   })

   const {name,lastName,phonenumber,school,password,password2} = user
   
   const onChange = e => setuser({ ...user, [e.target.name]: e.target.value })
   
   const onSubmit = e => {
      e.preventDefault()
      if (password !== password2) {
         console.log("Parollar bir biriga mos emas")
      } else {
         const newUser = {
            name,
            lastName,
            phonenumber,
            school,
            password
         }
         try {
            const config = {
               headers: {
                  "Content-Type": "application/json"
               }
            }
            const body = JSON.stringify(newUser)
            //console.log(body)
            axios.post("http://localhost:5000/api/register",config.headers,body)
               .then((data) => {
               console.log(data)
            })
         } catch (error) {
            console.error(error.response.data)
         }
      }
   }

   return (
      <div className="Register container">
      <NavBar  title={"Sign Up"} link={ "/auth" }/>
      <div className="glass auth">
         <form action="" onSubmit={e => onSubmit(e)}>
            <h4>Ro'yhatdan o'tish</h4>
            <input
               type="text"
               placeholder="Ism"
               name="name"
               value={name}
               onChange={e => onChange(e)}
               required
               />
            <input 
               type="text" 
               placeholder="Familiya" 
               name="lastName"
               value={lastName}
               onChange={e => onChange(e)}
               required
            />
            <input 
               type="number" 
               placeholder="Telefon-raqam" 
               name="phonenumber"
               value={phonenumber}
               onChange={e => onChange(e)}
               required
            />
            <input 
               type="text" 
               placeholder="Maktab sinf" 
               name="school"
               value={school}
               onChange={e => onChange(e)}
               required
            />
            <input 
               type="password" 
               placeholder="Parol" 
               name="password"
               value={password}
               onChange={e => onChange(e)}
               required
            />
            <input 
               type="password" 
               placeholder="Parolni qayta kiritish" 
               name="password2"
               value={password2}
               onChange={e => onChange(e)}
               required
            />
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