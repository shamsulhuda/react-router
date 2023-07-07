import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function PostDetails() {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleAuthor = () => {
    navigate(`/user/${post.userId}`);
  };
  return (
    <div>
      <div className="post-details">
        <h2>{post.title}</h2>
        <br />
        <div className="rte">{post.body}</div>
        <br />
        <button onClick={handleAuthor}>Show author</button>
      </div>
    </div>
  );
}
