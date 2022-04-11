import React from 'react'
import NavBar from './Navbar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLarge as icon } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
const Home = () => {
   const styles = {
      form: {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'flex-start'
      }
   }
   return (
      <div className="Home container">
         <NavBar link={"/cabinet"} title={<FontAwesomeIcon icon={icon } className="close" />} />
         <div className="glass auth">
            <form action="" style={styles.form}>
               <h4 className="mmin">Ro'yhatdan o'tish</h4>
               <p className="min">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos nemo consequatur, quaerat vel doloremque cumque sint perferendis aperiam blanditiis!</p>
               <a className="button" href="/start">Tasdiqlash</a> 
               <div className="hr" ></div>
               <h4 className="mmin">Ro'yhatdan o'tish</h4>
               <p className="min">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos nemo consequatur, quaerat vel doloremque cumque sint perferendis aperiam blanditiis!</p>
               <a className="button" href="/start">Tasdiqlash</a>
               <div className="hr" ></div>
               <h4 className="mmin">Ro'yhatdan o'tish</h4>
               <p className="min">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos nemo consequatur, quaerat vel doloremque cumque sint perferendis aperiam blanditiis!</p>
               <a className="button" href="/start">Tasdiqlash</a>
            </form>
         </div>
      </div>
   )
}

export default Home