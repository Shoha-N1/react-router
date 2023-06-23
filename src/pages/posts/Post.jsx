import React from "react";
import { useParams } from "react-router-dom";
import { usePost } from "./queries";

export default function Post() {
  const { id } = useParams();
  const{ isLoading, isError, error, data } = usePost(id)

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h2>Error - {error.toString()}</h2>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <div>{data?.body}</div>
    </div>
  );
}
