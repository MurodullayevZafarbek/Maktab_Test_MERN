import React from 'react'
import NavBar from './Navbar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Finish = () => {
   const styles = {
      align: {
         width:"100%",
         textAlign: 'center',
         fontSize:"62px"
      },
      buttonf: {
         marginBottom:"80px"
      }
   }
   return (
      <div className="Finish container">
         <NavBar link={"/home"} title={ "Asosiy bo'lim" }/>
         <div className="glass auth">
         <a href="/home"><FontAwesomeIcon icon={faXmark } className="close" /></a>
            <form action="">
               <h4>Test yakunlandi</h4>
               <h2 style={styles.align}>100%</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam laboriosam obcaecati consequuntur, architecto cumque repudiandae modi provident at deleniti officiis quas mollitia, commodi saepe, hic minus tempora magnam a.</p>
               <p style={styles.buttonf}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam laboriosam obcaecati consequuntur, architecto cumque repudiandae modi provident at deleniti officiis quas mollitia, commodi saepe, hic minus tempora magnam a.</p>
               <a className="button" href="/test">Sertifikatni olish</a>
            </form>
         </div>
      </div> 
   )
}

export default Finish