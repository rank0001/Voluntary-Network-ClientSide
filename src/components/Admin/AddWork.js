import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import logo from "../../logos/group.png";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "45ch",
		},
	},
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "30ch",
	},
}));
export default function AddWork() {
	const history = useHistory();
	const [userInfo, setUser] = React.useState({
		date: "",
		description: "",
		title: "",
		image: "cleanWater.png",
	});
	const [error, setError] = React.useState({
		message: "",
	});
	const classes = useStyles();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (userInfo.date && userInfo.description && userInfo.title) {
			console.log(userInfo);
			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userInfo),
			};
			fetch(
				"https://blooming-ridge-79416.herokuapp.com/addEvent",
				requestOptions
			)
				.then((response) => response.json())
				.then((data) => history.push("/"));
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
			<Typography variant="h5" align='center' style={{fontWeight:'bold'}} >
				Add Event
			</Typography>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				align="center"
				onSubmit={handleSubmit}
				style={{marginTop:'50px'}}
			>
				<TextField
					id="outlined-basic"
					variant="outlined"
					label="Event Title"
					name="title"
					placeholder="Enter Title "
					onBlur={handleBlur}
				/>

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
				    style={{marginLeft:'140px'}}
					id="outlined-multiline-static"
					label="Description"
					name="description"
					multiline
					rows={4}
					placeholder="Give description"
					variant="outlined"
					onBlur={handleBlur}
				/>
				<input type="file" style={{marginTop:'40px',marginLeft:'20px'}}/>
				<br />
				<Button variant="contained" color="primary" type="submit">
					Submit
				</Button>
				<br />
			</form>
			
			<Typography style={{ color: "red" }} variant="h6" align='center'>
					{error.message}
				</Typography>
		</div>
	);
}
