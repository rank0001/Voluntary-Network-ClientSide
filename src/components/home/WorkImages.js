import React from "react";
import { CardMedia, Typography, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	media: {
		height: "100px",
		cursor: "pointer",
		paddingTop: "56.25%", // 16:9
	},
}));
export default function WorkImages({ data }) {
	const classes = useStyles();
	return (
		<Grid item lg={3} md={3} sm xs>
			<Card className={classes.cardRoot}>
				<CardMedia className={classes.media} image={`images/${data.image}`} />
			</Card>
			<Typography variant="h6">{data.title}</Typography>
		</Grid>
	);
}
