import Image from "next/image";

const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <Image 
                src={'https://i.pinimg.com/280x280_RS/31/ea/ec/31eaec68556ad38582536cf34f228df9.jpg'} 
                alt="" 
                height={64} 
                width={64} 
                className="rounded-full border p-[2px]"
            />
            <div className="flex-1 ml-4">
                <h2 className="font-bold">UserName</h2>
                <h3 className="text-sm text-gray-400">Velcome to Instagram</h3>
            </div>
            <button className="font-semibold text-blur-400 text-sm">Sign Out</button>
        </div>
    );
}

export default MiniProfile;