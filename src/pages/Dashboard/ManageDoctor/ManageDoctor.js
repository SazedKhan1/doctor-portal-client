import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import ConfirmationModal from '../../shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: { authorization: `bearar ${localStorage.getItem('accessToken')}` }
                })
                const data = res.json()
                return data
            } catch (error) {

            }
        }
    })
    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl text-blue-600 text-center mb-2'>Manage Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className=" w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={doctor.photo} alt='doctor' />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    deletingDoctor && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                        successAction={handleDeleteDoctor}
                        successButtonName="Delete"
                        modalData={deletingDoctor}
                        closeModal={closeModal}>

                    </ConfirmationModal>
                }
            </div>

        </div>
    );
};

export default ManageDoctor;