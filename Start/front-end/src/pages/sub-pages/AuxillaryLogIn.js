import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const AuxillaryLogIn = () => {
  return (
    <>
      <NavBar />

      <div className="pages">
        <section className="blank"> </section>
        <div className="staff-forms" id="auxillary-login">
          <h4> Social Auxillary Worker Log In </h4>

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
            <button className="form-buttons"> Log In </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AuxillaryLogIn;
