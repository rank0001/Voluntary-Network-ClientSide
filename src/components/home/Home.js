import React from "react";
import Events from "../../dummyData/EventInfo";
import Search from "./Search";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import WorkImages from "./WorkImages";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	loader: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function Home() {
	const classes = useStyles();
	const [eventState, setEvent] = React.useState([]);

	React.useEffect(() => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(Events),
		};
		fetch("https://blooming-ridge-79416.herokuapp.com/", requestOptions)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	React.useEffect(() => {
		fetch("https://blooming-ridge-79416.herokuapp.com/")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEvent(data);
			});
	}, []);

	return (
		<div>
			<Search />

			{!eventState.length ? (
				<div className={classes.loader}>
					<LinearProgress />
					<LinearProgress color="secondary" />
				</div>
			) : (
				<div>
					<Typography style={{ color: "green" }} variant="h6" align="center">
						Total Number Of Events : {eventState.length}
					</Typography>
					<Grid
						container
						spacing={2}
						style={{ marginTop: "20px" }}
						alignItems="center"
						justify="center"
					>
						{eventState.map((event) => (
							<WorkImages data={event} />
						))}
					</Grid>
				</div>
			)}
		</div>
	);
}
