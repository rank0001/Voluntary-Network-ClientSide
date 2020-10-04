import React from "react";
import { CardMedia, Typography, Grid, Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../logos/group.png";

const useStyles = makeStyles((theme) => ({
	media: {
		height: "100px",
		paddingTop: "56.25%", // 16:9
	},
	cardRoot: {
		width: "200px",
		maxWidth: 345,
		cursor: "pointer",
	},
}));
const WorkDetails = ({ data, click }) => {

	const handleDelete = (id) => {
		let id1 = '"' + id + '"';
		console.log(id1);
		click(id);
	};

	const classes = useStyles();
	return (
		<Grid item lg={3} md={3} sm xs>
			<Card className={classes.cardRoot}>
				<CardMedia className={classes.media} image= "../../../images/babySit.png" />
			</Card>
			<Typography variant="h6">{data.event}</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={() => handleDelete(data._id)}
			>
				Delete
			</Button>
		</Grid>
	);
};

export default WorkDetails;
