'use client'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import { useEffect, useState } from 'react'
import Suggestion from '../Suggestion'

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState<any[]>([])
    useEffect(() => {
        const suggestions = minifaker.array(5, (i) => (
            {
                id: 'i',
                username: minifaker.username().toLowerCase(),
                jobtitle: minifaker.jobTitle(),
                img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)+1}`,
            }
        ))
        setSuggestions(suggestions);
    },[])
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between mb-5 text-sm">
                <h3 className="font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {suggestions.map(suggestion=>(
                <Suggestion key={suggestion.username} suggestion={suggestion} />
            ))}
        </div>
    );
}

export default Suggestions;