import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hook/useToken';



const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, handleGoogleSignIn } = useContext(Authcontext);
    const [signupError, setSignupError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();


    if (token) {
        navigate('/');
    }
    const handleSignUp = data => {
        setSignupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success('user created successfully')
                const userInfo = {
                    displayName: data.name,
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err)
                setSignupError(err.message)
            });

    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h3 className='text-xl text-center mb-2'>Signup</h3>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="Text" placeholder="Type here"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full" />

                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" placeholder="Type here"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full" />

                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" placeholder="Type here"
                            {...register("password", { required: "Password Address is required", minLength: { value: 6, message: "Password must be 6 characters" } })}
                            className="input input-bordered w-full" />
                        <label className="label"><span className="label-text">Forgot Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </form>
                <p>Already have an account???? <Link className='text-secondary' to='/login'>please log in </Link></p>
                <div className="divider">OR</div>
                <button onClick={() => handleGoogleSignIn()} className='btn btn-outline w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default Signup;