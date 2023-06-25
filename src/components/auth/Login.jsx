import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const elForm = useRef(null);
  const { logIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(elForm.current);

    setLoading(true);

    fetch("http://localhost:1337/api/auth/local", {
      body: formData,
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.jwt && data.user){
          logIn(data)
        }else {
          setError(new Error(data?.error?.message || "Unexpected error"))
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <small>{error.toString()}</small>}
      <form onSubmit={handleSubmit} ref={elForm}>
        <input type="text" name="identifier" placeholder="Username or Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">{loading ? "Loading..." : "Login"}</button>
      </form>
    </div>
  );
}
