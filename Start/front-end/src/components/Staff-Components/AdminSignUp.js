import { Link } from "react-router-dom";

const AdminSignUp = () => {
  return (
    <div className="staff-forms">
      <h4> Administrator Sign Up </h4>
      <form
        method="post"
        action="https://plum-perfect-pronghorn.cyclic.app/users"
      >
        <input type="text" name="fullName" placeholder="First name" required />
        <input type="email" name="userName" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="form-buttons">Sign Up </button>
      </form>

      <Link to="/administrators-log-in">
        <span className="toggle-form"> Already have an account </span>
      </Link>
    </div>
  );
};
export default AdminSignUp;
