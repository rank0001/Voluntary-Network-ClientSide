import React from "react";
import Events from "../../dummyData/EventInfo";
import Search from "../Search";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import WorkImages from "./WorkImages";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cardRoot: {
		maxWidth: 345,
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
		fetch("http://localhost:5000/", requestOptions)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	React.useEffect(() => {
		fetch("http://localhost:5000/")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEvent(data);
			});
	}, []);

	return (
		<div>
			<Search />

			<Grid container spacing={2} style={{ marginTop: "20px" }}>
				
						{eventState.map((event) => (
							<WorkImages data={event} />
						))}
					
				
			</Grid>
		</div>
	);
}
