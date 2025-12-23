import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
    const [message, setMessage] = useState();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data);
    const handleGoogleSignIn = () => {}
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl mb-4 font-semibold">Please Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email Address" className="shadow appearance-none rounded border py-2 px-3 w-full leading-tight focus:outline-none"/>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="Password" className="shadow appearance-none rounded border py-2 px-3 w-full leading-tight focus:outline-none"/>
          </div>

          {
            message && <p className="text-red-500 text-xs mb-3 font-semibold">{message}</p>
          }

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:none">Register</button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm ">Already have an account? Please
          <Link to={"/login"} className="text-blue-500 hover:text-blue-700"> Login</Link>
        </p>

        {/* Google signin */}
        <div className="mt-4">
          <button
          onClick={handleGoogleSignIn}
          className="flex flex-wrap w-full gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        
        <p className="text-gray-500 text-xs mt-4 text-center">2025 Book Store. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Register