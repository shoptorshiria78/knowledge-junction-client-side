import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  BsGoogle } from "react-icons/bs";
import Title from "../SharedComponent/Title";
import Paragraph from "../SharedComponent/Paragraph";



const Register = () => {

    const { register, logOut, googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const image = form.image.value;
        console.log(email, password);

        if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
            return swal('Error,Please Input a valid email, error')
        }

        if (!(/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/).test(password)) {
            return swal('Error', 'Your password should have at least 1 upper case letter, 1 special character and 6 character long', 'error')
        }

        register(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            swal("Congratulation", "User has been created Successfully", "success")
            updateProfile(user, {
                displayName: name,
                 photoURL:image
              })
              .then(() => {
                window.reload();
              })
              .catch(error=>{
                console.log(error.message)
              })

              logOut()
              .then()
              .catch(error => {
                console.error(error);
            })
            
            navigate('/logIn')

          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            swal("Error", `${error.Firebase}`, "error")
          });
    }

    const handleGoogleLogIn = () => {

        googleLogIn()
            .then()
            .catch()

            navigate('/')
    }

    return (
        <div className="hero min-h-screen bg-emerald-50 w-full max-w-[1200px] mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center flex-1 lg:text-left">
                    <Title >Sign Up Now!</Title>
                    <Paragraph>Explore the experience waiting for you. Do not hesitate to start this amazing journey.</Paragraph>
                </div>
                <div className="card  flex-1 w-full max-w-sm shadow-2xl bg-lime-50">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-xl">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-xl">Image Url</span>
                            </label>
                            <input type="text" placeholder="Image Url" className="input input-bordered" name="image" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-amber-400 font-bold text-xl">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="relative">
                                <label className="label">
                                    <span className="label-text text-amber-400 font-bold text-xl">Password</span>
                                </label>
                                <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full  " required />
                                <span className="absolute top-[54px] left-[300px] " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>

                                    } </span>
                            </div>
                        <div className="form-control mt-4 ">
                            <input className="bg-amber-400 rounded-xl py-3 w-full text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>

                    <div className="text-center my-3">
                        <h1 className="text-amber-400 text-lg font-medium">Do not have any account?<Link to='/logIn'>Log In</Link></h1>
                    </div>
                    <div className="mx-auto my-10 flex flex-col  w-[300px]">
                        <button onClick={handleGoogleLogIn} className=" flex bg-amber-500 text-white items-center w-full p-2 mt-3 rounded-full border-amber-600 border-2 "><BsGoogle></BsGoogle> <span className="ml-24">Continue with google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;