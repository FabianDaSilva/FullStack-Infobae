import React, { useState } from 'react'
import CardList from '../components/CardList'
import { Layout } from '../layouts/Layout'
import { useFetch } from '../services/FetchData'
import { filterPostsByTag } from '../utils/FilterPostByTag';

const Home = () => {
    const { data, loading, error } = useFetch('post')
    // console.log(data)

    const [selectedTag, setSelectedTag] = useState('');

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    const filteredPosts = selectedTag ? filterPostsByTag(data.data, selectedTag) : data.data;

    return (
        <Layout>
            {selectedTag && (
                <button onClick={() => handleTagClick('')} className="bg-orange-200 text-[#3b3b3b] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded w-[100px] h-[50px]">
                    Mostrar Todos
                </button>
            )}
            {error && <p>Error: {error.message}</p>}
            {loading && <p>Cargando...</p>}
            {data && Array.isArray(data.data) && <CardList posts={filteredPosts} handleTagClick={handleTagClick} />}
        </Layout>
    )
}

export default Home