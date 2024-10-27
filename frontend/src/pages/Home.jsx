import React from 'react'
import { Layout } from '../layouts/Layout'
import { useFetch } from '../services/FetchData'

const Home = () => {
   const {data} = useFetch('post')
   console.log(data)
    return (
        <Layout>
            <div>Home</div>
        </Layout>
    )
}

export default Home