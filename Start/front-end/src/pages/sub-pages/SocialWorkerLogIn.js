import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const SocialWorkerLogin = () => {
  return (
    <>
      <NavBar />
      <div className="pages">
        <section className="blank"> </section>

        <div className="staff-forms">
          <h4> Touching Nations Social Worker Log In </h4>
          <form
            method="post"
            action="https://plum-perfect-pronghorn.cyclic.app/user-login"
          >
            <input
              type="email"
              name="social-login-email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="social-login-password"
              placeholder="Password"
              required
            />
            <button className="form-buttons">Log In </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SocialWorkerLogin;
