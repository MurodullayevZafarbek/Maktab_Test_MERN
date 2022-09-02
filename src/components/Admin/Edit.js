import React from 'react'
import NavBar from '../Navbar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen ,faTrash as faBin } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import './Admin.css'
const Edit = () => {
   return (
      <div className="Admin container">
         <NavBar link={"/admin"} title={"Asosiy bo'lim"} />
         <div className="sinf edit">
            <h2>Matematika</h2>
            <h2>130</h2>
         </div>
         <div className="glass edit">
            <h2 className="num">01</h2>
            <div className="close">
               <a href=""><FontAwesomeIcon icon={faPen } /></a>
               <a href=""><FontAwesomeIcon icon={faBin } /></a>
            </div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptates tempora corrupti. Deserunt eum delectus beatae. Cupiditate quia temporibus, est officiis eaque dolor, earum delectus dolores cum officia, voluptatibus et!</h4>
            <form action="" className="form-verstical">
               <label htmlFor='inp1'>
                  <input type="radio" name="test" id="inp1" />
                  <div className="rad"></div>
                  AbCDPppp
               </label>
                  
               <label htmlFor='inp2'>
                  <input type="radio" name="test" id="inp2" />
                  <div className="rad"></div>
                  AbCDPppp
               </label>
               <label htmlFor='inp3'>
                  <input type="radio" name="test" id="inp3"/>
                  <div className="rad"></div>
                  AbCDPppp
               </label>
               <label htmlFor='inp4'>
                  <input type="radio" name="test" id="inp4"/>
                  <div className="rad"></div>
                  AbCDPppp
               </label>
            </form>
         </div>
         <div className="glass edit">
            <h2 className="num">02</h2>
            <div className="close">
               <a href=""><FontAwesomeIcon icon={faPen } /></a>
               <a href=""><FontAwesomeIcon icon={faBin } /></a>
            </div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptates tempora corrupti. Deserunt eum delectus beatae. Cupiditate quia temporibus, est officiis eaque dolor, earum delectus dolores cum officia, voluptatibus et!</h4>
            <form action="" className="form-verstical">
               <label htmlFor='inp1'>
                  <input type="radio" name="test" id="inp1" />
                  <div className="rad"></div>
                  AbCDPppp
               </label>
                  
               <label htmlFor='inp2'>
                  <input type="radio" name="test" id="inp2" />
                  <div className="rad"></div>
                  AbCDPppp
               </label>
               <label htmlFor='inp3'>
                  <input type="radio" name="test" id="inp3"/>
                  <div className="rad"></div>
                  AbCDPppp
               </label>
               <label htmlFor='inp4'>
                  <input type="radio" name="test" id="inp4"/>
                  <div className="rad"></div>
                  AbCDPppp
               </label>
            </form>
         </div>
      </div>
   )
}

export default Edit