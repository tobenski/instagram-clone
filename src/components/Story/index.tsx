import Image from "next/image";

const Story = ({username, image}:{username:string, image: string}) => {
    return (
        <div>
            <Image src={image} alt={username} width={50} height={50} />
            <p>{username}</p>
        </div>
    );
}

export default Story;