import { FaDeleteLeft } from "react-icons/fa6";
const Post = ({post}) => {
    return (
        <div className="card post-card" style={{width: "30rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{post.title}
      <span class="position-absolute top-0 start-100 translate-middle badge
        rounded-pill bg-danger">
        <FaDeleteLeft />
      
      </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => (
      <span class="badge  text-bg-dark hashtag"># {tag}</span>
    ))}
    <div class="alert alert-info reaction" role="alert">
      This post is reacted by {post.reaction} people
    </div>
  </div>
</div>
    )
}
export default Post;