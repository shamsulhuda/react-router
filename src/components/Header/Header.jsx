import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
}
