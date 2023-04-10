import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/solid";

const Story = ({username, image, isUser}:{username:string, image: string, isUser?: boolean}) => {
    return (
        <div className="relative group cursor-pointer">
            <Image 
                src={image} 
                alt={username} 
                width={56} 
                height={56} 
                className="rounded-full p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200 ease-out" 
            />
            {isUser && <PlusIcon className="h-6 absolute top-4 left-4 text-white"/>}
            <p className="text-xs w-14 truncate">{username}</p>
        </div>
    );
}

export default Story;