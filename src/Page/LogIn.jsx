import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logInAnimation from '../assets/login Animation.json'
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { logIn, googleLogIn } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then((result) => {
                console.log(result.user)
                swal("Congratulation", "User logged in", "success")
                e.target.reset()
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                swal(`${error}`)
                e.target.reset()
            })

    }

    const handleGoogleLogIn = () => {

        googleLogIn()
            .then()
            .catch()
        navigate(location?.state ? location.state : '/');
    }

    return (
        <div className="hero min-h-screen bg-lime-100">
            <div className="w-full max-w-[1200px] mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div >
                        <Lottie className=" ml-10 h-[450px]" animationData={logInAnimation} loop={false}></Lottie>
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-amber-50">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-emerald-400 font-bold text-xl">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text text-emerald-400  font-bold text-xl">Password</span>
                                </label>
                                <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full  " required />
                                <span className="absolute top-[54px] left-[300px] " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>

                                    } </span>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="bg-emerald-400 rounded-xl py-3 w-full text-white" value="Log In" />
                            </div>
                        </form>

                        <div className="text-center my-3">
                            <h1 className="text-emerald-400 text-lg font-medium">Already have an account?<Link to='/register'>Register</Link></h1>
                        </div>
                        <div className="mx-auto my-10 flex flex-col  w-[300px]">
                            <button onClick={handleGoogleLogIn} className=" flex bg-emerald-500 text-white items-center w-full p-2 mt-3 rounded-full border-emerald-600 border-2 "><BsGoogle></BsGoogle> <span className="ml-24">Continue with google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;