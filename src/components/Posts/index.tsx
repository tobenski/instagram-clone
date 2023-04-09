import Post from "../Post";

const Posts = () => {
    const posts = [
        {
            id: "1",
            username: "tirdyr.tobenski",
            userImg: 'https://i.pinimg.com/280x280_RS/31/ea/ec/31eaec68556ad38582536cf34f228df9.jpg',
            image: 'https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            caption: 'A very nice picture',
        },
        {
            id: "2",
            username: "DetGamlePosthus",
            userImg: 'https://i.pinimg.com/280x280_RS/31/ea/ec/31eaec68556ad38582536cf34f228df9.jpg',
            image: 'https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            caption: 'A very Sun picture',
        }
    ]
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Posts;