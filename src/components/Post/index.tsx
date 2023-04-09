const Post = ({
    post: { 
        id, 
        username, 
        userImg, 
        image, 
        caption
    }}:{
        post : { 
            id: string,
            username: string, 
            userImg: string, 
            image: string, 
            caption: string,
         }}) => {
    return (
        <div>
            <h1>{username}</h1>
        </div>
    );
}

export default Post;