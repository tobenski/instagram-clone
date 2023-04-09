import Image from "next/image";
import { EllipsisHorizontalIcon as Dots } from '@heroicons/react/24/solid'

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
        <div className="bg-white my-7 border rounded-md">
            {/* Post Header */}
            <div className="flex items-center p-5">
                <Image 
                    src={userImg} 
                    height={48} 
                    width={48} 
                    alt={username}
                    className="rounded-full object-cover border p-1 mr-3"
                    />
                <p className="font-bold flex-1">{username}</p>
                <Dots className="h-5" />
            </div>
            {/* Post image */}
            <img src={image} alt="" className="object-cover w-full" />
        </div>
    );
}

export default Post;