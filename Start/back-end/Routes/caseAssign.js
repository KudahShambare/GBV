const express = require("express");
const { Client } = require("pg");

const router = express.Router();

// Connection configuration
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

//? restructure this route?
router.post("/cases/assign", (req, res) => {
	const { userId, caseNumber, activityType, activityDesc } = req.body;
	try {
		client.query(
			"SELECT * FROM case_activities WHERE case_id =$1;",
			[caseNumber],
			(err, response) => {
				if (err) throw err;
				if (response.rows.length < 1) {
					client.query(
						"INSERT into case_activities(activity_type, activity_description, case_id, date_created, user_id)VALUES($1, $2, $3, $4);",
						[activityType, activityDesc, userId, caseNumber],
						(err, response) => {
							if (err) throw err;
							res.status(200).json({ msg: "Case successfully assigned" });
						}
					);
				} else {
					client.query(
						"UPDATE case_activities SET user_id=$1, activity_type=$2, activity_description=$3 WHERE case_id=$4",
						[userId, activityType, activityDesc, caseNumber],
						(err, response) => {
							if (err) throw err;
							res.status(200).json({ msg: "Case information updated" });
						}
					);
				}
			}
		);
	} catch (err) {
		console.error(err.message);
	}
});

router.put("/case-status-update", (req, res) => {
	console.log("In case update route", req.body);
	const { state, caseID } = req.body;
	try {
		client.query(
			"UPDATE cases SET case_status_id=(SELECT id FROM case_status WHERE name=$1) WHERE case_number=$2",
			[state, caseID],
			(err, response) => {
				if (err) throw err;
				res.status(200).send("Case status updated");
			}
		);
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
