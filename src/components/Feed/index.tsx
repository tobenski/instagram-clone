import Posts from "../Posts";
import Stories from "../Stories";


const Feed = () => {
    return (
        <main>
            <section>
                {/* Stories */}
                <Stories />
                {/* posts */}
                <Posts />
            </section>
            <section>
                {/* mini profile */}

                {/* Suggestions */}
            </section>
        </main>
    );
}

export default Feed;