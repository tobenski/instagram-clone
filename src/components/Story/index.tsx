import Image from "next/image";

const Story = ({username, image}:{username:string, image: string}) => {
    return (
        <div>
            <Image src={image} alt={username} width={56} height={56} className="rounded-full p-[1.5px] border-2 border-red-500 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" />
            <p className="text-xs w-14 truncate">{username}</p>
        </div>
    );
}

export default Story;