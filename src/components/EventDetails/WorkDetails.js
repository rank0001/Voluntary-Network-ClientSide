import React from "react";
import { Typography, Grid, Button, Paper, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
	media: {
		height: "100px",
		paddingTop: "56.25%", // 16:9
	},
	cardRoot: {
		width: "900px",
		maxWidth: 345,
		cursor: "pointer",
	},
	paper: {
		padding: theme.spacing(2),
		margin: "auto",
		maxWidth: 500,
	},
	image: {
		width: 180,
		height: 128,
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
		width: "180px",
	},
}));
const WorkDetails = ({ data, click }) => {
	const handleDelete = (id) => {
		click(id);
	};

	const classes = useStyles();
	return (
		<Grid item lg={6} md={6} sm={6} xs>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img
								className={classes.img}
								alt="complex"
								src="../../../images/babysit.png"
							/>
						</ButtonBase>
					</Grid>

					<Grid item xs={12} sm container style={{ marginLeft: "10px" }}>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography
									style={{ fontWeight: 800 }}
									gutterBottom
									variant="subtitle1"
								>
									{data.event}
								</Typography>
								<Typography
									style={{ fontWeight: 800 }}
									gutterBottom
									variant="subtitle1"
								>
									{new Date(data.date).toDateString()}
								</Typography>

								<Button
									variant="contained"
									color="default"
									style={{ position: "relative", left: "80px", top: "30px" }}
									className={classes.button}
									startIcon={<DeleteIcon />}
									onClick={() => handleDelete(data._id)}
								>
									Delete
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default WorkDetails;
