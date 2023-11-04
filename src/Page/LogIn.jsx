import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import logInAnimation from '../assets/login Animation.json'


const LogIn = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full max-w-[1200px] mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div >
                        <Lottie className=" ml-10 h-[350px]" animationData={logInAnimation} loop={false}></Lottie>
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="bg-red-400 rounded-xl py-3 w-full text-white" value="Log In" />
                            </div>
                        </form>

                        <div className="text-center my-3">
                            <h1>Already have an account?<Link to='/register'>Register</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;