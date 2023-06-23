import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts(id);
  }, [id]);

  async function fetchPosts(postId) {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/posts/${postId}`);
      const data = await res.json();

      if (data) {
        setPost(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading || !post) return <h1>Loading...</h1>;

  if (error) return <h2>Error - {error.toString()}</h2>;

  return (
    <div>
      <h1>{post?.title}</h1>
      <div>{post?.body}</div>
    </div>
  );
}
