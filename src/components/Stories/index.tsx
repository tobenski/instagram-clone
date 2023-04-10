'use client'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import { useState, useEffect } from 'react';
import Story from '../Story';
import { useSession } from 'next-auth/react';

const Stories = () => {
    const [ storyUsers, setStoryUsers] = useState<any[]>([]);
    const {data:session} = useSession();

    useEffect(() => {
      const users = minifaker.array(20, (i) => (
        {
            username: minifaker.username().toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)+1}`,
            id: i,

        }));
        setStoryUsers(users)
    }, [])
    
    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 boder-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'>
            {/* @ts-ignore */}
            {session && <Story username={session?.user?.username || '' } image={session?.user?.image || ''} isUser /> }
            {storyUsers.map((user) => {
                return (
                    <Story key={user.id} username={user.username} image={user.img} />
                )
            })}
        </div>
    );
}

export default Stories;