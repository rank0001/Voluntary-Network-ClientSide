import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import logo from "../../logos/group.png";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			width: "45ch",
			margin: theme.spacing(1),
		},
	},
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "45ch",
	},
}));

const RegisterEvent = ({ location, user }) => {
	const history = useHistory();
	const [userInfo, setUser] = useState({
		name: user.name,
		email: user.email,
		date: "",
		description: "",
		event: "",
	});

	const [error, setError] = useState({
		message: "",
	});
	if (!user.isSignedIn) history.push("/login");

	let title = "";

	if (location.state) {
		title = location.state.data.title;
		if (userInfo.event == "") {
			const newUserInfo = { ...userInfo };
			newUserInfo.event = title;
			setUser(newUserInfo);
		}
	}

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			userInfo.name &&
			userInfo.email &&
			userInfo.date &&
			userInfo.description &&
			userInfo.event
		) {
			console.log(userInfo);
			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userInfo),
			};
			fetch(
				"https://blooming-ridge-79416.herokuapp.com/users",
				requestOptions
			).then((response) => history.push("/event"));
		} else {
			setError({ message: "you must complete each field for submitting" });
			console.log(userInfo);
		}
	};

	const handleBlur = (e) => {
		setError({ message: "" });
		const newUserInfo = { ...userInfo };
		newUserInfo[e.target.name] = e.target.value;
		setUser(newUserInfo);
	};

	return (
		<div>
			<img
				src={logo}
				alt=""
				style={{
					margin: "auto",
					display: "block",
					maxWidth: "100%",
					maxHeight: "100%",
					height: "80px",
				}}
			/>
			<Typography variant="h5" align="center" style={{ marginTop: "15px" }}>
				Register as a volunteer
			</Typography>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				align="center"
				onSubmit={handleSubmit}
			>
				<TextField
					id="standard-basic"
					label="Full Name"
					name="name"
					placeholder="enter name"
					value={user.name}
					onBlur={handleBlur}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Email"
					name="email"
					placeholder="Enter email"
					value={user.email}
					onBlur={handleBlur}
				/>
				<br />
				<TextField
					id="date"
					label="Date"
					type="date"
					name="date"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
					onBlur={handleBlur}
				/>
				<br />
				<TextField
					id="standard-basic"
					label="Description"
					name="description"
					placeholder="enter description"
					onBlur={handleBlur}
				/>
				<br />
				{title ? (
					<TextField
						id="standard-basic"
						label="Details"
						name="details"
						value={title}
					/>
				) : (
					<TextField
						id="standard-basic"
						label="Details"
						name="event"
						onBlur={handleBlur}
					/>
				)}

				<br />
				<Button variant="contained" color="primary" type="submit">
					Registration
				</Button>
				<br />
			</form>
			<Typography style={{ color: "red" }} variant="h6" align="center">
				{error.message}
			</Typography>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state.user);
	return { user: state.user };
};
export default connect(mapStateToProps)(RegisterEvent);
