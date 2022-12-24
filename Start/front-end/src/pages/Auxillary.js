import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Auxillary = () => {
  //form info captured in backend

  return (
    <>
      <NavBar />

      <div className="pages">
        ]<section className="blank"> </section>
        <div className="staff-forms">
          <h4> Social Auxillary Worker Sign Up </h4>
          <form>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              required
            />
            <input
              type="text"
              name="auxId"
              placeholder="Employee ID/Email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <button className="form-buttons"> Sign Up </button>

            <Link to="/auxillary-social-worker-log-in">
              <span className="toggle-form"> Already Have An Account </span>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Auxillary;
