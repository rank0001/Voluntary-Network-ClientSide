import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import WorkDetails from "./WorkDetails";
import { useHistory } from "react-router-dom";

const Event = ({ user }) => {
	const history = useHistory();
	if (!user.isSignedIn) {
		history.push("/login");
	}

	const [events, setEvents] = React.useState([]);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		fetch("https://blooming-ridge-79416.herokuapp.com/user?email=" + user.email)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEvents(data);
			});
	}, [count]);

	const handleDelete = (id) => {
		console.log(id);

		const requestOptions = {
			method: "DELETE",
		};
		fetch(
			`https://blooming-ridge-79416.herokuapp.com/users/delete/${id}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setCount((set) => set + 1);
			});
	};

	return (
		<div>
			<Grid container spacing={2} style={{ marginTop: "20px" }}>
				{events.map((event) => (
					<WorkDetails data={event} click={handleDelete} />
				))}
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state.user);
	return { user: state.user };
};
export default connect(mapStateToProps)(Event);
