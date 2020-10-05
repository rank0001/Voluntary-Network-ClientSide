import React from "react";
import { CardMedia, Typography, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
	media: {
		height: "200px",
		paddingTop: "56.25%", // 16:9
	},
	cardRoot: {
		width: "300px",
		cursor: "pointer",
	},
}));

const color = ["#FBC02D", "#E64A19", "#009688", "#303F9F"];

const WorkImages = ({ data, user }) => {
	const position = color[Math.floor(Math.random() * Math.floor(4))];
	console.log(position);
	const history = useHistory();
	const handleEventClick = (data) => {
		console.log(data);
		if (!user.isSignedIn) {
			const location = {
				pathname: "/login",
				state: { data },
			};

			history.push(location);
		} else {
			const location = {
				pathname: "/register",
				state: { data },
			};
			history.push(location);
		}
	};

	const classes = useStyles();
	return (
		<Grid item lg={3} md sm xs>
			<Card
				className={classes.cardRoot}
				style={{ marginLeft: "5px" }}
				onClick={() => handleEventClick(data)}
			>
				<CardMedia className={classes.media} image={`images/${data.image}`} />
			</Card>
			<Typography
				variant="h6"
				style={{
					marginLeft: "5px",
					position: "relative",
					top: "-50px",
					textAlign: "center",
					width: "300px",
					background: position,
					height: "50px",
				}}
			>
				{data.title}
			</Typography>
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(WorkImages);
