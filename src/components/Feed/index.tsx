import MiniProfile from "../Miniprofile";
import Posts from "../Posts";
import Stories from "../Stories";
import Suggestions from "../Suggestions";
import Wrapper from "./Wrapper";



const Feed = () => {
    // const {data:session} = useSession();
    return (
        <Wrapper>
            <section className="md:col-span-2">
                {/* Stories */}
                <Stories />
                {/* posts */}
                <Posts />
            </section>
            <section className="hidden md:inline-grid md:col-span-1">
                <div className="fixed w-[380px]">
                    {/* mini profile */}
                    <MiniProfile />
                    {/* Suggestions */}
                    <Suggestions />
                </div>
                
            </section>
        {/* </main> */}
        </Wrapper>
    );
}

export default Feed;