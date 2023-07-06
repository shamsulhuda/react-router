import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

export default function Users() {
  const users = useLoaderData();
  return (
    <div className="users-list">
      <h2>Total users: {users.length}</h2>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
}
