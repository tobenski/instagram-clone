import Image from "next/image";

const Suggestion = ({suggestion}:{suggestion:any}) => {
    return (
        <div className="flex items-center justify-between mt-3">
            <Image 
                src={suggestion.img} 
                alt="" 
                height={40} 
                width={40} 
                className="rounded-full border p-[2px]"
            />
            <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{suggestion.username}</h2>
                <h3 className="text-gray-400 text-sm truncate max-w-[230px]">{suggestion.jobtitle}</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm">Follow</button>
        </div>
    );
}

export default Suggestion;