'use client'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import { useState, useEffect } from 'react';
import Story from '../Story';

const Stories = () => {
    const [ storyUsers, setStoryUsers] = useState<any[]>([]);

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
        <div>
            {storyUsers.map((user) => {
                return (
                    <Story key={user.id} username={user.username} image={user.img} />
                )
            })}
        </div>
    );
}

export default Stories;