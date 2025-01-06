import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from "react";
import { PostList as PostListContext } from "../store/post-list-store"; // Assuming this is the context

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      {/* Optional image section, uncomment and provide a valid source if needed */}
      {/* <img src={post.imageUrl} className="card-img-top" alt={post.title} /> */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <FaDeleteLeft />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div>
          {post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary hashtag">
              # {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-info reaction" role="alert">
          This post is reacted by {post.reaction} people
        </div>
      </div>
    </div>
  );
};

export default Post;
