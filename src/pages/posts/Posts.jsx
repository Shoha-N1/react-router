import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();

      if (data?.posts?.length) {
        setPosts(data.posts);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if(loading) return <h1>Loading...</h1>

  if (error) return <h2>Error - {error.toString()}</h2>;

  return (
    <div>
        <ul>
          {posts.map((post) => (
            <li>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}
