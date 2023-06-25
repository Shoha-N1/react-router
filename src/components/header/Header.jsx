import React, { useContext } from "react";
import NavLink from "../nav-link/NavLink";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { logOut } = useContext(AuthContext);
  return (
    <div style={{ backgroundColor: "red" }}>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/posts"}>Posts</NavLink>
          </li>
          <li>
            <button onClick={() => logOut()}>Log Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
