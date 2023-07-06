import React from "react";
import { useLoaderData } from "react-router-dom";

export default function PostDetails() {
  const post = useLoaderData();
  console.log(post.title);
  return (
    <div>
      <div className="post-details">
        <h2>{post.title}</h2>
        <br />
        <div className="rte">{post.body}</div>
      </div>
    </div>
  );
}
