import React from "react";
import { CardMedia, Typography, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
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
const WorkImages = ({ data, user }) => {

	const history = useHistory();
	const handleEventClick = (data) => {
		console.log(data);
		if (!user.isSignedIn) {
			const location = {
				pathname: "/login",
				state: { data },
			};
			
			history.push(location);
		} 
		else{
			const location = {
				pathname: "/register",
				state: { data },
			};
			history.push(location);
		}
	};

	const classes = useStyles();
	return (
		<Grid item lg={3} md={3} sm xs>
			<Card className={classes.cardRoot} onClick={() => handleEventClick(data)}>
				<CardMedia className={classes.media} image={`images/${data.image}`} />
			</Card>
			<Typography variant="h6">{data.title}</Typography>
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(WorkImages);
