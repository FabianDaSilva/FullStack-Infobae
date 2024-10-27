import React from 'react'
import Card from './Card'

const CardList = ({ posts, handleTagClick }) => {
    return (
        <div className=" py-0">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Posteos</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <Card posts={posts} handleTagClick={handleTagClick}/>
                </div>
            </div>
        </div>
    )
}

export default CardList