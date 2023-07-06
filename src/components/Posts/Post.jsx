import React from "react";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div>
      {/* <Link to={`/post/${post.id}`}>{post.title}</Link> */}
      <h4 className="title">{post.title}</h4>
      <button onClick={handleNavigate}>Show Details</button>
    </div>
  );
}
