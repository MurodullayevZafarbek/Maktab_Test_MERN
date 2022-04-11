import React from 'react'
import NavBar from './Navbar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faDownload } from '@fortawesome/free-solid-svg-icons'
const Test = () => {
   const styles = {
      but: {
         position: 'absolute',
         top: "45px",
         right: "0"
      }
   }
   return (
      <div className="Test container">
         <NavBar />
         <button style={styles.but} type="submit" onSubmit="/home" href="/home">Tugatish</button>
         <div className="position">
            <div className="div">
               <h1>01</h1>
            </div>
            <div className="div">
               <h1>02</h1>
            </div>
            <div className="div">
               <h1>03</h1>
            </div>
            <div className="div">
               <h1>04</h1>
            </div>
            <div className="div">
               <h1>05</h1>
            </div>
            <div className="div">
               <h1>06</h1>
            </div>
            <div className="div">
               <h1>07</h1>
            </div>
            <div className="div">
               <h1>08</h1>
            </div>
            <div className="div">
               <h1>09</h1>
            </div>
            <div className="div">
               <h1>10</h1>
            </div>
            <div className="div">
               <h1>11</h1>
            </div>
            <div className="div">
               <h1>12</h1>
            </div>
            <div className="div">
               <h1>13</h1>
            </div>
         </div>
         <div className="glass auth">
            <h2 className="num">01</h2>
            <div className="close">
               <a href="/home"><FontAwesomeIcon icon={faXmark } className="" /></a>
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
         <div className="df">
            <button type="button">Oldingisi</button>
            <p>1:30</p>
            <button type="button">Keyingisi</button>
         </div>
      </div>
   )
}

export default Test