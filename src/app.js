import React from "react";
import "@babel/polyfill";
import { Switch,Route,NavLink} from "react-router-dom";

export default function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="route-nav-link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="route-nav-link">About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className="route-nav-link">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
