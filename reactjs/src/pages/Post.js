import { useParams } from "react-router-dom";

const Post = () => {
  let { postId } = useParams();
  return <div>hello world {postId}</div>;
};

export default Post;
