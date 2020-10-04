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
	const classes = useStyles();
	return (
		<div>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				align="center"
				
			>
				<TextField
					id="outlined-basic"
                    variant="outlined"
					label="Event Title"
					name="title"
					placeholder="Enter Title "
					
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
			
				/>
                <br/>
				<TextField
					id="outlined-basic"
                    variant="outlined"
					label="Description"
					name="description"
					placeholder="Enter description"
					
					
				/>
				

				
			</form>
		</div>
	);
}
