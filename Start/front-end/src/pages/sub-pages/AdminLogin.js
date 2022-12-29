import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const AdminLogin = () => {
  return (
    <>
      <NavBar />
      <div className="pages">
        <section className="blank"> </section>

        <div className="staff-forms">
          <h4> Administrator Log In </h4>

          <form
            method="post"
            action="https://plum-perfect-pronghorn.cyclic.app/user-login"
          >
            <input
              type="email"
              name="employeeID"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            {/*Temporary Link to be replaced by page redirect*/}
            <Link to="/manager-dashboard">
              <button className="form-buttons">Log In </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AdminLogin;
