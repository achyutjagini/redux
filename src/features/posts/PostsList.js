import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";


const PostsList = () => {
    //will get empty array if don't add key and reducer in store
    // / needed add the posts slice with the postsReducer function to the store's state.

    const posts = useSelector(selectAllPosts);
    console.log(posts)

    //slice used to create a shallow copy


    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    return (
        <section>
            <h2>Posts</h2>
            {orderedPosts.map((post) => {
                return (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}</p>

                        <p className="postCredit">
                            <PostAuthor userId={post.userId} />
                            <TimeAgo timestamp={post.date} />
                        </p>

                    </article>

                )
            }
            )
            }
        </section>
    );
}

export default PostsList