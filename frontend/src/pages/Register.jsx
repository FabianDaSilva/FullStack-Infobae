import React, { useState } from 'react'
import { Layout } from '../layouts/Layout'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
        console.log(dataForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');

        axios.post('http://localhost:3000/api/users', dataForm)
            .then((response) => {
                // console.log(response);                
                setDataForm({
                    name: '',
                    email: '',
                    password: ''
                });
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    navigate('/profile');
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }



    return (
        <Layout hide={true}>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <GoogleLogin
                    className={'flex justify-center'}
                    buttonText="Sign In with Google"
                    onSuccess={credentialResponse => {
                        if (credentialResponse.credential) {
                            // console.log(credentialResponse);
                            localStorage.setItem('token', credentialResponse.credential);
                            navigate('/profile');

                        }
                    }}
                    onError={() => {
                        console.warn('Login Failed');
                    }}
                    useOneTap
                />
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-t-2 pt-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-start">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-start">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center text-start">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>

    )
}

export default Register