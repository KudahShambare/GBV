import { Link } from "react-router-dom";

const SocialWorkerSignUp = () => {
  return (
    <div className="staff-forms">
      <h4> Touching Nations Social Worker Sign Up</h4>
      <form
        method="post"
        action="https://plum-perfect-pronghorn.cyclic.app/users"
      >
        <input type="text" name="fullName" placeholder="Full name" required />
        <input
          type="text"
          name="employeeID"
          placeholder="Employee ID/Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="form-buttons"> Sign Up </button>
        <Link to="/social-worker-log-in">
          <span className="toggle-form"> Already Have An Account </span>
        </Link>
      </form>
    </div>
  );
};
export default SocialWorkerSignUp;
