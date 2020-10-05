import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import WorkDetails from "./WorkDetails";
import { useHistory } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	loader: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

const Event = ({ user }) => {
	const history = useHistory();
	const classes = useStyles();
	if (!user.isSignedIn) {
		history.push("/login");
	}

	const [events, setEvents] = React.useState([]);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		fetch("https://blooming-ridge-79416.herokuapp.com/user?email=" + user.email)
			.then((response) => response.json())
			.then((data) => {
				setEvents(data);
			});
	}, [count]);

	const handleDelete = (id) => {
		const requestOptions = {
			method: "DELETE",
		};
		fetch(
			`https://blooming-ridge-79416.herokuapp.com/users/delete/${id}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => {
				setCount((set) => set + 1);
			});
	};

	return (
		<div>
			{events.length ? (
				<Grid container spacing={1} style={{ marginTop: "20px" }}>
					{events.map((event) => (
						<WorkDetails data={event} click={handleDelete} />
					))}
				</Grid>
			) : (
				<div className={classes.loader}>
					<LinearProgress />
					<LinearProgress color="secondary" />
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(Event);
