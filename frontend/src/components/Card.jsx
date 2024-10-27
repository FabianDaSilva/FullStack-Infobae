import React from 'react'

const Card = ({ posts, handleTagClick }) => {
    // console.log(posts)
    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                                <button key={index} className="bg-orange-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                                onClick={() => handleTagClick(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <img
                            alt={post.text}
                            src={post.image}
                            className="h-48 w-full object-cover"
                        />
                        <div className="flex min-w-0 gap-x-4 items-start">
                            <img alt={post.owner.firstName} src={post.owner.picture} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                            <div className="min-w-0 ">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{post.owner.firstName}</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">{post.text}</h3>
                            <p className="mt-2 text-sm text-gray-600">Likes: {post.likes}</p>
                            <p className="mt-2 text-sm text-gray-600">Publicado: {new Date(post.publishDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Card