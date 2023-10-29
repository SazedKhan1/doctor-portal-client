import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit } = useForm()
    const imageHostKey = process.env.REACT_APP_imagehostkey;
    const navigate = useNavigate()
    const { data: speacilities, isLoading } = useQuery({
        queryKey: ['appointmentSpeciality'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpeciality`);
            const data = await res.json()
            return data

        }
    })
    const handleAddDoctor = data => {
        console.log(data)
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url)
                }
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    photo: imageData.data.url
                }
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        toast.success(`${data.name} successfully added `)

                    })
            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7 mx-6'>
            <h3 className='text-xl text-center mb-2'>Add Doctor</h3>
            <div >
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" placeholder="Type here"
                            {...register("name", { required: "Name  is required" })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" placeholder="Type here"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full mt-1">
                        <select className="select select-bordered w-full max-w-xs"  {...register('specialty')}>

                            {
                                speacilities.map(specialty => <option key={specialty._id} value={specialty.name}>
                                    {specialty.name}</option>)
                            }

                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">photo</span></label>
                        <input type="file" placeholder="Type here"
                            {...register("img", { required: "Photo is required" })}
                            className="input input-bordered w-full" />
                    </div>

                    <input className='btn btn-accent w-full' value='Add Doctor' type="submit" />

                </form>




            </div>
        </div>
    );
};

export default AddDoctor;