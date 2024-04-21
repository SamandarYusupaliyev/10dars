import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import FormInput from "../components/FormInput";

function Signin() {
  const { signupWihtGoogle, user, error } = useSignup();
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96 w-full">
        <FormInput type="email" label="Email:" />
        <FormInput type="password" label="Password:" />
        <div>
          <button className="btn btn-secondary w-full mb-3" type="sumbit">
            Sumbit
          </button>
          <button
            type="button"
            onClick={signupWihtGoogle}
            className="btn btn-secondary w-full mb-5"
          >
            <FcGoogle className="text-3xl" />
            <span className="text-xl">Google</span>
          </button>
          <p className="text-center">
            If you don't have account
            <Link className="link text-cyan-400" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
