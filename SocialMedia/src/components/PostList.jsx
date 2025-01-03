import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListContext } from "../store/post-list-store"; // Assuming this is a context

const PostList = () => {
  const { postList } = useContext(PostListContext);

  return (
    <>
      {postList && postList.length > 0 ? (
        postList.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts available</p> // Fallback for empty or undefined postList
      )}
    </>
  );
};

export default PostList;
