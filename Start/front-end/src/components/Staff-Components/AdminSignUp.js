import { Link } from "react-router-dom";

const AdminSignUp = () => {
	return (
		<div className="staff-forms">
			<h4> Administrator Sign Up </h4>
			<form
				method="post"
				action="https://plum-perfect-pronghorn.cyclic.app/users"
			>
				<input type="text" name="fullname" placeholder="First Name" required />
				{/* <input
					type="text"
					name="admin-last-name"
					placeholder="Last Name"
					required
				/> */}
				<input type="email" name="userName" placeholder="Email" required />
				<input
					type="text"
					name="touchingNationsId"
					placeholder="Touching Nations ID"
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
				/>
				{/* Hi Kuda, staff role should be assigned by admin, not selected in
				signup. */}
				{/* <section className="staff-radios">
					<label>Role</label>
					<br />
					<span>Manager</span>{" "}
					<input type="radio" name="admin-role" value="female" required />
					<span>Clerk</span>{" "}
					<input type="radio" name="admin-role" value="male" required />
				</section> */}
				<button className="form-buttons">Sign Up </button>
			</form>

			<Link to="/administrators-log-in">
				<span className="toggle-form"> Already have an account </span>
			</Link>
		</div>
	);
};
export default AdminSignUp;
