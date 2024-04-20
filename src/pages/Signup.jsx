import { useSignup } from "../hooks/useSignup"
import { FcGoogle } from "react-icons/fc";


function Signup() {
   const {signupWihtGoogle,user,error}=useSignup()
   console.log(user);
  return (
    <div className="min-h-screen grid place-items-center">
        <button onClick={signupWihtGoogle} className="btn btn-secondary">
        <FcGoogle className="text-2xl"/>
         Google
        </button>
    </div>
  )
}

export default Signup

