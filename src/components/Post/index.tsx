'use client'
import Image from "next/image";
import { EllipsisHorizontalIcon as Dots } from '@heroicons/react/24/solid'
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon as ChatIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { useSession } from "next-auth/react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const Post = ({post}:{post:any}) => {
    const {data: session } : { data: any} = useSession();
    const [comment, setComment] = useState("")

    const sendComment = async (e:any) => {
        e.preventDefault();
        const commentToSend = comment;
        setComment("");
        await addDoc(collection(db, "posts", post.id, "comments"), {
            comment: commentToSend,
            username: session?.user?.username,
            userImage: session?.user?.image,
            timestamp: serverTimestamp(),
        })

    }

    return (
        <div className="bg-white my-7 border rounded-md">
            {/* Post Header */}
            <div className="flex items-center p-5">
                <Image 
                    src={post.data().profileImg} 
                    height={48} 
                    width={48} 
                    alt={post.data().username}
                    className="rounded-full object-cover border p-1 mr-3"
                    />
                <p className="font-bold flex-1">{post.data().username}</p>
                <Dots className="h-5" />
            </div>
            {/* Post image */}
            <div className="relative w-full h-[450px]">
            <Image src={post.data().image} alt="" fill sizes="100vw" className="object-cover w-full" />
            </div>

            {/* Post Buttons */}
            { session && (
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        <HeartIcon className="btn" />
                        <ChatIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            )}

            {/* Caption */}
            <p className="p-5 truncate"><span className="font-bold mr-2">{post.data().username}</span>{post.data().caption}</p>

            {/* Comments imput box */}
            {session && (
                <form className="flex items-center p-4">
                    <FaceSmileIcon className="h-7" />
                    <input 
                        type="text" 
                        placeholder="Enter your comment..." 
                        className="border-none flex-1 focus:ring-0"
                        value={comment}
                        onChange={(e)=> {setComment(e.target.value)}}
                        />
                    <button onClick={sendComment} disabled={!comment.trim()} className="text-blue-400 font-bold disabled:text-blue-200">Post</button>
                </form>
            )}
        </div>
    );
}

export default Post;