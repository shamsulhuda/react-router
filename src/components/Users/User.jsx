import React from "react";
import { Link } from "react-router-dom";

export default function User({ user }) {
  return (
    <div className="user">
      <div>
        <h4>Name: {user.name}</h4>
        <p>Email: {user.email}</p>
        <p>
          Username: <Link to={`/user/${user.id}`}>{user.username}</Link>
        </p>
      </div>
    </div>
  );
}
