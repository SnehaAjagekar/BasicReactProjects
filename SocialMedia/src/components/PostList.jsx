import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListContext } from "../store/post-list-store"; // Assuming this is a context
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  const handleGetPostClick = () =>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
      addInitialPost(data.posts)
    });
  }
  return (
    <>
      {postList && postList.length > 0 ? (
        postList.map((post) => <Post key={post.id} post={post} />)
      ) 
      : (
        <WelcomeMessage onGetPostsClick={handleGetPostClick}/>// Fallback for empty or undefined postList
      )
      }
    </>
  );
};

export default PostList;
