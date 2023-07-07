import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import PostDetails from "../components/PostDetails/PostDetails";
import Posts from "../components/Posts/Posts";
import Shop from "../components/Shop/Shop";
import UserDetails from "../components/UserDetails/UserDetails";
import Users from "../components/Users/Users";
import Main from "../layout/Main";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/shop",
          loader: async () =>{
            return fetch("https://dummyjson.com/products");
          },
          element: <Shop></Shop>,
        },
        {
          path: "/users",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Users></Users>,
        },
        {
          path: "/user/:userId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            );
          },
          element: <UserDetails></UserDetails>,
        },
        {
          path: "/posts",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts></Posts>,
        },
        {
          path: "/post/:postId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <PostDetails></PostDetails>,
        },
      ],
    },
    { path: "*", element: <div>This route not found</div> },
  ]);
