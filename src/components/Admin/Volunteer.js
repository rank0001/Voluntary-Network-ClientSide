import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Switch, useHistory, Route } from "react-router-dom";
import UserList from "./UserList";
import img from "../../logos/trash-2-9.png";
import { Button } from "@material-ui/core";

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
		fetch("http://localhost:5000/users")
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
		fetch(`http://localhost:5000/users/delete/${id}`, requestOptions)
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
					sm
					xs
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
					>
						Add Event
					</Link>
				</Grid>

				<Grid item lg={8} spacing={2} md={8} sm xs>
					{user.map((user) => {
						return (
							<div>
								{user.name}
                                {user.email}
                                {user.date}
								<img src={img} alt="" />
                                <Button onClick={()=>handleDelete(user._id)}>Delete</Button>
                                
							</div>
						);
					})}
				</Grid>
			</Grid>
		</div>
	);
}
