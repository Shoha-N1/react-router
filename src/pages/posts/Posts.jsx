import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "./queries";
import useFetch from "../../hooks/useFetch";

export default function Posts() {
  const {data, isLoading, isError, error} = useFetch("http://localhost:1337/api/newss")
  // const {isLoading, isError, data, error} = usePosts()
 
 

  if(isLoading || !data?.posts?.length) return <h1>Loading...</h1>

  if (isError) return <h2>Error - {error.toString()}</h2>;

  return (
    <div>
        <ul>
          {data?.data?.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.attributes.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}
