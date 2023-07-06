import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

export default function Posts() {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Total posts: {posts.length}</h2>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
}
