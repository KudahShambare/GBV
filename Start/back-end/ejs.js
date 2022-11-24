const express = require("express");
const passport = require("passport");
const methodOverride = require("method-override");

const router = express.Router();

const initializePassport = require("./passport-config");
initializePassport(
	passport,
	(email) => users.find((user) => user.email === email),
	(id) => users.find((user) => user.id === id)
);

router.use(passport.initialize());
router.use(passport.session());
router.use(methodOverride("_method"));

router.get("/", checkAuthenticated, (req, res) => {
	res.render("index.ejs", { name: req.user.name });
});

router
	.route("/login")
	.get(checkNotAuthenticated, (req, res) => {
		res.render("login.ejs");
	})
	.post(
		checkNotAuthenticated,
		passport.authenticate("local", {
			successRedirect: "/",
			failureRedirect: "/login",
			failureFlash: true,
		})
	);

router
	.route("/signup")
	.get(checkNotAuthenticated, (req, res) => {
		res.render("signup.ejs");
	})
	.post(checkNotAuthenticated, async (req, res) => {
		try {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			users.push({
				id: Date.now().toString(),
				name: req.body.name,
				email: req.body.email,
				password: hashedPassword,
			});
			res.redirect("/login");
		} catch {
			res.redirect("/signup");
		}
		console.log(users);
	});

router.delete("/logout", (req, res) => {
	req.logOut();
	res.redirect("login");
});

function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect("/");
	}
	next();
}

module.exports = router;
