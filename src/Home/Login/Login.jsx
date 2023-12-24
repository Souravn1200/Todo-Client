import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const { logInUser, createUserByGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        
        logInUser(email, password)
        .then(result => {
            Swal.fire("Logged In!", "", "success");
            navigate('/dashboard');
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleGoogleRegister = () => {
        createUserByGoogle()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
           console.log(error);
        });
    };

    return (
        <div>
            <div className="max-w-md mx-auto pt-8 pb-2 h-screen">

<form
    className="rounded px-8 pt-6 pb-8 mb-4 sm:max-w-lg sm:mx-auto"
    onSubmit={handleSubmit(onSubmit)}
>
    <div className="mb-4">
        <label
            htmlFor="email"
            className="block text-[#F0ECE5] text-sm  mb-2"
        >
            Email
        </label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Here"
            {...register('email', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F0ECE5] leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.email && <p className='text-red-700 text-center mt-2'>*Email required.</p>}
    </div>

    <div className="mb-4">
        <label
            htmlFor="password"
            className="block text-[#F0ECE5] text-sm  mb-2"
        >
            Password
        </label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            {...register('password', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && <p className='text-red-700 text-center mt-2'>*Password required.</p>}



    </div>

    <div className="flex items-center justify-center sm:justify-end">
        <button
            type="submit"
            className="bg-[#B6BBC4] hover:bg-[#F0ECE5] text-black  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Submit
        </button>
    </div>
</form>

<div className="form-control mt-6 w-1/2 mx-auto">
    <button onClick={handleGoogleRegister} className="btn text-white bg-[#3d657a] hover:bg-[#6096B4]">Register By Google 
        
        <img src="https://img.icons8.com/?size=48&id=17949&format=png" className='h-6' alt="" />
     </button>
</div>

<p className='mx-auto text-white text-center mt-10'>Do Not Have An Account? <NavLink to="/register"> <a href="" className='text-white-700 underline'>  Please Register</a> </NavLink>  </p>

</div>
        </div>
    );
};

export default Login;
