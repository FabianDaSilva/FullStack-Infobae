import React, { Suspense } from 'react'
import { Layout } from '../layouts/Layout'
import { useFetch } from '../services/FetchData'
import CardList from '../components/CardList'

const Home = () => {
    const { data, loading, error } = useFetch('post')
    // console.log(data)
    return (
        <Layout>
            {error && <p>Error: {error.message}</p>}
            {loading && <p>Cargando...</p>}
            {data && Array.isArray(data.data) && <CardList posts={data.data} />}
        </Layout>
    )
}

export default Home