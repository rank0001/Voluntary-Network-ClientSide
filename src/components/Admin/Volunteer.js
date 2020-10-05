import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import UserList from "./UserList";
import "./Admin.css";

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
export default function Volunteer() {
	const [user, setUser] = React.useState([]);
	const [count, setCount] = React.useState(0);
	React.useEffect(() => {
		fetch("https://blooming-ridge-79416.herokuapp.com/users")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setUser(data);
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
				console.log(data);
				setCount((set) => set + 1);
			});
	};

	const history = useHistory();
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={2} style={{ marginTop: "20px" }}>
				<Grid
					item
					lg={2}
					md={2}
					sm={2}
					xs={12}
					style={{
						marginLeft: "20px",
						borderRight: "1px solid #cccccc",
						height: "700px",
					}}
				>
					<Link
						component="button"
						variant="body2"
						onClick={() => {
							history.push("/volunteers");
						}}
						className="link"
					>
						Volunteer Register List
					</Link>
					<br />
					<Link
						component="button"
						variant="body2"
						onClick={() => {
							history.push("/volunteers/add");
						}}
						className="link"
					>
						Add Event
					</Link>
				</Grid>

				<Grid item lg md sm xs={12}>
					<UserList data={user} click={handleDelete} />
				</Grid>
			</Grid>
		</div>
	);
}
