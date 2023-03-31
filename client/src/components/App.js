
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import NewApartment from "./NewApartment";
import MyList from "./MyList";
import Home from "./Home";
import MyErrorBoundary from "./MyErrorBoundary";

function App() {
  const [user, setUser] = useState(null);
  const [types, setTypes] = useState([]);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/types").then((r) => {
      if (r.ok) {
        r.json().then((type) => setTypes(type));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/apartments").then((r) => {
      if (r.ok) {
        r.json().then((apartments) => setApartments(apartments));
      }
    });
  }, []);

  function handleDeleteApartment(id) {
    const updatedApartments = apartments.filter(
      (apartment) => apartment.id !== id
    );
    setApartments(updatedApartments);
  }

  function handleUpdateApartment(updatedApartment) {
    const updatedApartments = apartments.map((apartment) => {
      if (apartment.id === updatedApartment.id) {
        return updatedApartment;
      } else {
        return apartment;
      }
    });
    setApartments(updatedApartments);
  }

  return (
    <BrowserRouter>
      <div>
        <NavBar setUser={setUser} user={user} />
        <MyErrorBoundary>
          <Switch>
            <Route path="/new">
              <NewApartment
                user={user}
                apartments={apartments}
                onChangeApartments={setApartments}
                types={types}
              />
            </Route>
            <Route path="/mylist">
              <MyList
                user={user}
                apartments={apartments}
                onDeleteApartment={handleDeleteApartment}
                onUpdateApartment={handleUpdateApartment}
              />
            </Route>
            <Route path="/login">
              {user ? (
                <h1>Welcome! {user.username}</h1>
              ) : (
                <LoginPage onSignIn={setUser} />
              )}
            </Route>
            <Route path="/">
              <Home
                apartments={apartments}
                onDeleteApartment={handleDeleteApartment}
                onUpdateApartment={handleUpdateApartment}
                types={types}
              />
            </Route>
          </Switch>
        </MyErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
