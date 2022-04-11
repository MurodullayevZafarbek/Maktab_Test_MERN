import React from 'react'
import NavBar from '../Navbar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen as icon ,faUpload as icon2 } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import './Admin.css'
const Upload = () => {
   return (
      <div className="Upload container">
         <NavBar link={"/admin"} title={"Asosiy bo'lim"} />
         <div className="glass">
            <form action="" enctype='multipart/form-data' >
               <input type="file" webkitdirectory directory multiple />
               <label htmlFor='inp1'>
                  <input type="radio" name="test" id="inp1" />
                  <div className="rad"></div>
                  Matematika
               </label>
               <label htmlFor='inp2'>
                  <input type="radio" name="test" id="inp2" />
                  <div className="rad"></div>
                  Fizika
               </label>
               <label htmlFor='inp3'>
                  <input type="radio" name="test" id="inp3"/>
                  <div className="rad"></div>
                  Kimyo
               </label>
               <label htmlFor='inp4'>
                  <input type="radio" name="test" id="inp4"/>
                  <div className="rad"></div>
                  Russ tili
               </label>
               <button className="button" type="submit">sfasdsasads</button>
            </form>
         </div>
      </div>
   )
}

export default Upload