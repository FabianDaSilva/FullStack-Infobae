
export const filterPostsByTag = (posts, tag) => {
    if (!Array.isArray(posts)) {
        return [];
    }
    return posts.filter(post => post.tags.includes(tag));
};