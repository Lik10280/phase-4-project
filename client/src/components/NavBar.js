import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "80px",
  padding: "0 20px",
  background: "#222",
  color: "#fff",
  fontSize: "20px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)"
};

const linkStyles = {
  display: "inline-block",
  padding: "0 20px",
  height: "100%",
  lineHeight: "80px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  textTransform: "uppercase",
  transition: "color 0.2s ease-in-out",
};

const activeLinkStyles = {
  color: "pink"
};

const buttonStyles = {
  display: "inline-block",
  padding: "10px 20px",
  height: "100%",
  lineHeight: "60px",
  background: "pink",
  color: "#222",
  borderRadius: "4px",
  border: "none",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "background 0.2s ease-in-out",
};

const activeButtonStyles = {
  background: "#fff",
  color: "pink"
};

function NavBar({ setUser, user }) {
  const history = useHistory();

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE"
    })
      .then((r) => {
        if (r.ok) {
          if (typeof setUser === "function") {
            setUser(null);
          }
          history.push("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div style={styles}>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={activeLinkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/new"
        exact
        style={linkStyles}
        activeStyle={activeLinkStyles}
      >
        Add New Apartment
      </NavLink>
      <NavLink
        to="/mylist"
        exact
        style={linkStyles}
        activeStyle={activeLinkStyles}
      >
        My List
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={activeLinkStyles}
      >
        {user?`Hi! ${user.username}`:"Login"}
      </NavLink>
      <button
        onClick={handleLogout}
        style={buttonStyles}
        activeStyle={activeButtonStyles}
      >
        Logout
      </button>
    </div>
  );
}

export default NavBar;
