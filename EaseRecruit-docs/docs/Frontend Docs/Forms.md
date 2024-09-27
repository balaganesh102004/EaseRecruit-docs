# Forms and Validation

Forms within the application are handled using **React Hook Form**, paired with **Yup** for validation. This combination streamlines form handling and ensures that user input adheres to defined validation rules, enhancing data integrity.

## Example of a Form with Validation

Here’s an example demonstrating how a form is structured and validated:

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from './FormInput';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                register={register}
                required={true}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <FormInput
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                register={register}
                required={true}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
};

export default LoginForm;
```