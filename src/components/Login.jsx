// import React, {useState} from "react"
// import {Link,useNavigate} from "react-router-dom"
// import {login as authLogin} from "../store/authSlice"
// import authService from "../appwrite/auth.js"
// import Button from "./Button.jsx"
// import Input from "./Input.jsx"
// import Logo from "./Logo.jsx"
// import { useDispatch } from "react-redux"
// import {useForm} from "react-hook-form"
// function Login(){

//    const navigate=useNavigate();
//    const dispatch = useDispatch();
//    const {register,handleSubmit} =useForm();
//     const [error,setError] = useState("");
//     const login = async (data)=>{
//         setError("");
//         try {
//             const session = await authService.login(data);
//                console.log(session);
//                console.log("abcd");
//           if(session){
//             const userData = await authService.getCurrentUser();
//             if(userData) dispatch(authLogin(userData));
//             navigate("/")  
//           }
//         } 
//         catch (error) {
//               console.log("Login.jsx :",error);
//             setError(error.message);
//         }
//    }

//     return(
//      <div className="flex-items-center justify-center w-full">

//          <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//               <div className="mb-2 flex justify-center">
//                 <span className="inline-block w-full max-w-[100px]">
//                     <Logo width="100%"/>
//                 </span> 
//             </div>
//             <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//             <p className="mt-2 text-center text-base text-black/60">
//                 Don&apos; have any account?&nbsp;
//                 <Link 
//                  to='/signup'
//                    className="font-medium text-primary transition-all duration-200 hover:underline"
//                 >
//                     Sign Up
//                 </Link>

//             </p>
//               {error&&<p className="text-red-600 mt-8 text-center">{error}</p>}

//               <form onSubmit={handleSubmit(login)} className="mt-8">
//                  <div className="space-y-5">
//                      <Input 
//                        label="Email: "
//                        placeholder="Enter your email"
//                        type="email"
//                        {...register("email",{
//                         required:true,
//                          validate:{
//                             matchPattren : (value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.
//                             test(value) || "Email address must be a valid address",
//                          }
//                        })}
//                      />
//                      <Input
//                        label="Password: "
//                        type="password"
//                        placeholder="Enter your password"
//                        {...register("password",{
//                          required:true,
//                        })}
//                      />
//                     <Button
//                       type='submit'
//                       className="w-full"
//                    >Sign in</Button>
//                  </div>
//               </form>
//          </div>
//      </div>
//     )
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import authService from "../appwrite/auth.js";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Logo from "./Logo.jsx";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const login = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error?.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have an account?&nbsp;
          <Link to='/signup' className="font-medium text-primary transition-all duration-200 hover:underline">
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center" aria-live="assertive">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be valid"
                }
              })}
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

