import React from 'react'
import NavBar from '../Navbar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen as icon ,faUpload as icon2 } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import './Admin.css'
const Admin = () => {
   return (
      <div className="Admin container">
         <NavBar link={"/admin/edit"} link2={"/admin/upload"} title={<FontAwesomeIcon icon={icon }/>} title2={<FontAwesomeIcon icon={icon2 }/>} />
         <div>
            <div className="gb">
               <a href="/admin/school" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school" className="buttona">1-maktab <span>9</span></a>
            </div>
         </div>
      </div>
   )
}

export default Admin