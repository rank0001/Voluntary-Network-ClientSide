import React from "react";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
}));
export default function Search() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography align="center" variant="h5">
				We GROW BY HELPING PEOPLE IN NEED
			</Typography>

			<div className={classes.search} align="center">
				<InputBase
					placeholder="Search…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ "aria-label": "search" }}
				/>
				<Button variant="contained" color="primary">
					Search
				</Button>
			</div>
		</div>
	);
}
