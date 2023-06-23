import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "./queries";
// import useFetch from "../../hooks/useFetch";

export default function Posts() {
  // const {data, loading, error} = useFetch("https://dummyjson.com/posts")
  const {isLoading, isError, data, error} = usePosts()
 
 

  if(isLoading || !data?.posts?.length) return <h1>Loading...</h1>

  if (isError) return <h2>Error - {error.toString()}</h2>;

  return (
    <div>
        <ul>
          {data.posts.map((post) => (
            <li>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}
