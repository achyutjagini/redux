import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";


const PostsList = () => {
    //will get empty array if don't add key and reducer in store
    // / needed add the posts slice with the postsReducer function to the store's state.

    const posts = useSelector(selectAllPosts);
    console.log(posts)

    return (
        <section>
            <h2>Posts</h2>
            {posts.map((post) => {
                return (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}</p>
                    </article>
                );
            })}
        </section>
    );
};
export default PostsList