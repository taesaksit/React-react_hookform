import React from 'react'
import { useForm } from 'react-hook-form'
export default function HookFormv2() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },

    } = useForm()

    const onSubmit = (data) => {
        console.log('Submited the form!', data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label> First Name: </label>
                    <input  {...register('firstName',
                        {
                            required: true,
                            minLength: {value:3 , message:'Min Len atleast 3'},
                            maxLength: 10

                        })} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>

                <div>
                    <label> Last  Name: </label>
                    <input {...register('lastName', { required: true })} />
                </div>
                <br />
                <input type="submit" />
            </form>
        </>
    )
}
