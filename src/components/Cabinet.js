import React from 'react'
import NavBar from './Navbar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const Cabinet = () => {
   return (
      <div className="Cabinet container">
         <NavBar link={"/home"} title={ "Asosiy bo'lim" }/>
         <div className="glass auth">
         <form action="">
            <h2>Abdurahmonov Abduvohid</h2>
            <p>9-A sinf o`qivchisi</p>
            <input type="tel" placeholder="+99890 999 12 34" />
            <input type="number" placeholder="Parol" />
            <button type="submit">Tasdiqlash</button>
            <h2>Sertifikatlar</h2>
               <h5>
                  Matematika
                  <FontAwesomeIcon icon={faDownload } className="download" />
               </h5>
               <h5>Fizika<FontAwesomeIcon icon={faDownload } className="download" /></h5>
         </form>
      </div>
      </div>
   )
}

export default Cabinet