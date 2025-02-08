import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: 'Name is required' })} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register('email', { required: 'Email is required' })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register('role', { required: 'Role is required' })} placeholder="Role" />
      {errors.role && <p>{errors.role.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
