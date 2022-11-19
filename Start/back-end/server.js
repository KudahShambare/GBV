if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
/**
 * Required external Modules
 */
const dotenv = require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const flash = require("express-flash");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const { v4: uuidV4 } = require("uuid");
const clientForm = require("./Routes/clientForm");
const referralForm = require("./Routes/referralForm");
const userSignUp = require("./Routes/userSignUp");
const userLogin = require("./Routes/userLogin");
const dashboards = require("./Routes/dashboards");
const caseAssign = require("./Routes/caseAssign");
const callBacks = require("./Routes/callbacks");
const managerAuth = require("./Routes/SuperManagerEmployeeIDAuthentication");
const referringOrgRegister = require("./Routes/referringOrgForm");
const ejs = require("./ejs");
const jwt = require("jsonwebtoken");

const { Client } = require("pg");
const cors = require("cors");

/**
 * Middleware
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view-engine", "ejs");

const users = []; //for ejs sign-up demo

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(flash());
app.use(
	expressSession({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);


//Routes to demo login
app.use(ejs);

// Connection configuration

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

app.get("/lookup/:table", (req, res) => {
	console.log("In lookup route");
	try {
		client.query("SELECT * FROM " + req.params.table, (err, response) => {
			if (err) throw err;
			res.json(response.rows);
		});
	} catch (err) {
		console.error(err);
	}
});

//Assign case
app.use(caseAssign);

//Track Cases
app.post("/tracking", (req, resp) => {
	try {
		client.query("SELECT * FROM cases WHERE case_number=$1", (result) => {
			resp.send(result.rows);
		});
	} catch (err) {
		console.error(err);
	}
});

//callbacks
app.use(callBacks);

//User sign-up - add validation to check userType to add role_id
app.use(userSignUp);

//User login
app.use(userLogin);

//Manager/Head Social worker Auth user access
app.use(managerAuth);

//Route to get data for social worker dashboard
app.use(dashboards);

//users test
app.post("/users/test", async (req, resp) => {
	console.log("This is the request:", req.body);
	const { fullname, employeeID, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);
	try {
		console.log(fullname);
		console.log(employeeID);
		console.log(hashedPassword);
		resp.send("User info received");
	} catch (err) {
		console.error(err);
	}
});

// Endpoint to receive referring organization data
app.use(referralForm);

//Endpoint to receive client form data
app.use(clientForm);

app.post("/EmployeeIDAuthentication", (req, res) => {
	console.log(req.body);
});

//callback
app.post("/callback", (req, resp) => {
	console.log("In Kuda's callback");
	try {
		client.query(
			"INSERT INTO callbacks (name,email,contact) VALUES ($1,$2,$3)",
			[req.body.callbackName, req.body.callbackEmail, req.body.callbackContact],
			(err, response) => {
				if (err) throw err;
				resp.status(200).send("Data received");
			}
		);
	} catch (err) {
		console.error(err);
	}
});

app.get("/getCallbacks", (req, resp) => {
	console.log("In GET callbacks");
	try {
		client.query("SELECT * FROM callbacks", (err, result) => {
			if (err) throw err;
			resp.json(result.rows);
		});
	} catch (err) {
		console.error(err);
	}
});

//Registration of referring organisations
app.use(referringOrgRegister);

app.post("/referingOrganisationsRegistration", (req, resp) => {
	console.log("In Kuda endpoint");
	let name = req.body.orgName;
	let location = req.body.location;
	let contact = req.body.contact;
	let email = req.body.email;
	let repName = req.body.repName;
	let repContact = req.body.repContact;
	let orgType = req.body.orgType;
	let touchingNationsID = uuidV4();
	let dateCreated = new Date();

	try {
		client.query(
			"INSERT INTO referring_organizations (organization_name, location, contact_number, email, authorized_person_name, organization_type, touching_nations_id, date_created, authorized_person_contact) VALUES ($1 ,$2 ,$3 ,$4 ,$5,$6,$7,  $8 ,$9)",
			[
				name,
				location,
				contact,
				email,
				repName,
				orgType,
				touchingNationsID,
				dateCreated,
				repContact,
			],
			(err, response) => {
				if (err) throw err;
				resp.status(200).send("Data captured");
			}
		);
	} catch (error) {
		resp.send(error.message);
	}
});

const port = process.env.Port || 8000;

app.listen(port, () => {
	return console.log(`Listening on port ${port}`);
});
