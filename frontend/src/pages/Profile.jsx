import React from 'react';

import { Layout } from '../layouts/Layout';
import { jwtDecode } from 'jwt-decode';


const Profile = () => {
  const token = localStorage.getItem('token');
  // console.log(token);

  const decoded = jwtDecode(token);
  console.log(decoded);
  // console.log(decoded.given_name)
  const userEmail = decoded.email;
  const userName = decoded.given_name;


  return (
    <Layout hide={true}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Hola! {userName ? userName : userEmail}</h1>
        <p className="text-lg mb-4">Esta página sigue en construcción</p>
        <img
          src="https://c.tenor.com/29Ok5pc0ivAAAAAd/tenor.gif"
          alt="Gatito trabajando"
          className="rounded-lg shadow-lg w-3/12"
        />
      </div>
    </Layout>
  )
}

export default Profile