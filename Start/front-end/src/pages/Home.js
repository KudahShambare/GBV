import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Touchingnationslogo.png";

export function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((body) => {
        setMessage(body.message);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <main role="main">
      <div>
        <img
          className="logo"
          data-qa="logo"
          src={logo}
          alt="Just the React logo"
        />
        <h1 className="message" data-qa="message">
          {message}
        </h1>
        <Link to="/about/this/site">About</Link>
      </div>
    </main>
  );
}

export default Home;
