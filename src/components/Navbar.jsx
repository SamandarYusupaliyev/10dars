import { Link } from "react-router-dom"
import NavLinks from "./NavLinks"

import {signOut} from "firebase/auth"
import {auth} from '../firebase/firebaseConfig'
  
import { useContext } from "react"
import { GlobalContext} from "../context/useGlobalContext";


function Navbar() {
  const {navbarBgColor} =useContext(GlobalContext)

  const signOutFunc =()=>{
    signOut(auth)
    .then(()=>{
      console.log("Sign out");
    })
    .catch((error)=>{
       console.log(error);
    })
  }

  return (
    <div className="bg-base-300 duration-300 transition " style={{backgroundColor:navbarBgColor}}>
        <div className="navbar align-element">
            <div className="navbar-start">
                <Link to ="/" className="btn btn-primary lg:btn-lg hidden lg:flex ">MyKitchen</Link>
              <div className="dropdown lg:hidden">
                  <button tabIndex={0} role="button"  className="btn  btn-primary lg:btn-lg mt-3">MK</button>
                  <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                     <NavLinks/>
                  </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLinks/>
            </div>
            <div className="navbar-end">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} 
              role="button" 
              className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
             <li>
                <button onClick={signOutFunc} className="btn btn-sm">Logout</button>
             </li>
           </ul>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar