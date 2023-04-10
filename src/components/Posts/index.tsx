'use client'
import { useEffect, useState } from "react";
import Post from "../Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

const Posts = () => {
    const [posts, setPosts] = useState<any[]>([])
    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, 'posts'), orderBy("timestamp", "desc")), (snapshot => {
                setPosts(snapshot.docs)
            })
        )
        return unsubscribe;
    },[])
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Posts;