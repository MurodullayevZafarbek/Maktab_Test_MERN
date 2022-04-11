import React from 'react'
import NavBar from '../Navbar/NavBar'
import '../../App.css'
import './Admin.css'
const School = () => {
   const styles = {
      width: {
         width:"50%"
      }
   }
   return (
      <div className="Admin container">
         <NavBar link={"/admin"} title={"Asosiy bo'lim"} />
         <div className="status">
            <div className="text">
               <p>Matematika</p>
               <p>129</p>
            </div>
            <div className="filter">
               <div style={styles.width}></div>
            </div>
         </div>
         <div className="status">
            <div className="text">
               <p>Matematika</p>
               <p>129</p>
            </div>
            <div className="filter">
               <div style={styles.width}></div>
            </div>
         </div>
         <div className="status">
            <div className="text">
               <p>Matematika</p>
               <p>129</p>
            </div>
            <div className="filter">
               <div style={styles.width}></div>
            </div>
         </div>
         <div className="status">
            <div className="text">
               <p>Matematika</p>
               <p>129</p>
            </div>
            <div className="filter">
               <div style={styles.width}></div>
            </div>
         </div>
         <h2>Sinflar</h2>
         <div>
            <div className="gb">
               <a href="/admin/school/sinf" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school/sinf" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school/sinf" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school/sinf" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school/sinf" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school/sinf" className="buttona">1-maktab <span>9</span></a>
            </div>
            <div className="gb">
               <a href="/admin/school/sinf" className="buttona">78-maktab <span>178</span></a>
               <a href="/admin/school/sinf" className="buttona">1-maktab <span>9</span></a>
            </div>
         </div>
      </div>
   )
}

export default School