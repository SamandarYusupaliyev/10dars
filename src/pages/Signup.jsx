import { useSignup } from "../hooks/useSignup"
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const {singnupWithGoogle,user,error}=useSignup()
  console.log(user);
  return (
    <div className="min-h-screen grid place-items-center  ">
      <button onClick={singnupWithGoogle} className="btn btn-secondary">
        <FcGoogle className="text-3xl"/>
        <span className="text-2xl">Google</span>
      </button>
    </div>
  )
}

export default Signup

