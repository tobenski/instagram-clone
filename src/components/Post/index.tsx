'use client'
import Image from "next/image";
import { EllipsisHorizontalIcon as Dots, HeartIcon as FilledHeart } from '@heroicons/react/24/solid'
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon as ChatIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { DocumentData, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import Moment from 'react-moment';

const Post = ({post}:{post:any}) => {
    const {data: session } : { data: any} = useSession();
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState<DocumentData[]>([])
    const [likes, setLikes] = useState<any[]>([]);
    const [hasLiked, setHasLiked] = useState<boolean>(false)

    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, "posts", post.id, "comments"), orderBy("timestamp", "desc")), (snapsnot) => {
                setComments(snapsnot.docs)
        })
        
    },[])

    useEffect(() => {
      const unsubscribe = onSnapshot(
        collection(db, "posts", post.id, "likes" ),
        (snapshot) => setLikes(snapshot.docs)
      )
    }, [])
    

    useEffect(() => {
        setHasLiked(
            likes.findIndex(like=>like.id === session?.user.uid) !== -1
        )
    },[likes])

    const likePost = async () => {
        if(hasLiked) {
            await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid ))    
        } else {
            await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid),{
                username: session.user.username
            })
        }
    }
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
                        {hasLiked ? (
                            <FilledHeart onClick={likePost} className="text-red-400 btn" />
                        ) : (
                            <HeartIcon onClick={likePost} className="btn" />
                        )}
                        <ChatIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            )}

            {/* Caption */}
            <p className="p-5 truncate">
            {likes.length > 0 && (
                <p className="font-bold mb-1">{likes.length} likes</p>
            )}    
            <span className="font-bold mr-2">{post.data().username}</span>{post.data().caption}</p>
            { comments.length > 0 && (
                <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
                    {comments.map(comment => {
                        return (
                            <div key={comment.data().timestamp} className="flex items-center space-x-2 mb-2">
                                <Image src={comment.data().userImage} alt="" width={28} height={28} className="h-7 rounded-full object-cover" />
                                <p className="font-semibold">{comment.data().username}</p>
                                <p className="flex-1 truncate">{comment.data().comment}</p>
                                <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>

                            </div>
                        )
                    })}
                </div>
            ) }
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