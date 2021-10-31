import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
// import useServices from '../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const { user } = useAuth()
    const [service, setService] = useState();
    // ---------------Service Details---------------

    useEffect(() => {
        fetch(`https://bloodcurdling-mansion-90066.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    // ------------------Order Booking------------------
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = "Pending";
        // console.log(data)
        fetch(`https://bloodcurdling-mansion-90066.herokuapp.com/addBooking`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.insertedId);
                if (result.insertedId) {
                    alert("Booked Successfully!");
                    reset();
                }

            });
    };
    // ----------------------------------------------------
    return (
        <div>
            <h1 className="mt-4" >Package Details</h1>
            <div>
                <img className="w-25 mt-4" src={service?.img} alt="" />
                <h1>{service?.name}</h1>
                <p className="w-50 bg-warning mx-auto p-4">Price: &#2547;{service?.price} <br />
                    <br /> Tour Details: <br /> {service?.details}
                </p>
                <p></p>
            </div>
            <hr />
            <div className="mt-4">
                <h1> Confirm Booking</h1> <br />
                <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue={user?.displayName} placeholder="name" {...register("name", { required: true })} /> <br />
                    <input defaultValue={user?.email} placeholder="email" {...register("email", { required: true })} /> <br />
                    <input defaultValue={serviceId} placeholder="OrderId" {...register("orderId", { required: true })} /> <br />
                    <input defaultValue="2" placeholder="Person" {...register("person", { required: true })} /> <br />
                    <input placeholder="Address" {...register("address", { required: true })} /> <br />
                    <input type="date" placeholder="Date" {...register("date", { required: true })} /> <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn-danger" type="submit" />
                </form>
            </div>
        </div>


    );
};

export default ServiceDetails;