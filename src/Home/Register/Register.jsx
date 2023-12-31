import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const photo = data.photo;
        const name = data.name;
      
        const auth = getAuth(); 
      
        createUser(email, password)
          .then(result => {
            const user = result.user; 

            
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photo,
            })
              .then(() => {
                if (user.email) {
                  navigate('/dashboard');
                }
              })
              .catch(error => {
                console.log('Error updating profile: ', error);
              });
          })
          .catch(error => {
            console.log(error);
          });


        console.log(email, password);

        const dbSaveUser = {
            email: email,
            password: password,
            photo: photo

        }
        axios.post('http://localhost:5000/todouser', dbSaveUser);

    }

    return (
        <div>
            <div className="max-w-md mx-auto pt-8 pb-8">

                <form
                    className="bg-[#31304D] shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:max-w-lg sm:mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-[#F0ECE5] text-sm  mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name Here"
                            {...register('name', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F0ECE5] leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.name && <p className='text-red-700 text-center mt-2'>*Name required.</p>}

                    </div>

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
                            htmlFor="photo"
                            className="block text-[#F0ECE5] text-sm  mb-2"
                        >
                            Photo Url
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            placeholder="Your photo link"
                            {...register('photo', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F0ECE5] leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.name && <p className='text-red-700 text-center mt-2'>*Photo Link required.</p>}

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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F0ECE5] leading-tight focus:outline-none focus:shadow-outline"
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
            </div>
        </div>
    );
};

export default Register;