import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch(`https://bloodcurdling-mansion-90066.herokuapp.com/addServices`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.insertedId);
                if (result.insertedId) {
                    alert("Inserted Succefully!");
                    reset();
                }

            });

    };
    return (
        <div className="mt-4">
            <h1> Add a new service here</h1> <br />
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="name" {...register("name", { required: true })} /> <br />
                <input type="number" placeholder="price" {...register("price", { required: true })} /> <br />
                <input placeholder="details" {...register("details", { required: true })} /> <br />
                <input placeholder="img-url" {...register("img", { required: true })} /> <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn-regular" type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;