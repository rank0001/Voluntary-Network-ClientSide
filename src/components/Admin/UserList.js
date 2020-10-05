import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

export default function Userlist({ data, click }) {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="center">Email Id</TableCell>
						<TableCell align="right">Registration Date&nbsp;</TableCell>
						<TableCell align="right">Volunteer List&nbsp;</TableCell>
						<TableCell align="right">Action&nbsp;</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((data) => (
						<TableRow key={Math.random()}>
							<TableCell component="th" scope="row">
								{data.name}
							</TableCell>
							<TableCell align="right">{data.email}</TableCell>
							<TableCell align="right">{data.date}</TableCell>
							<TableCell align="right">{data.event}</TableCell>
							<TableCell align="right">
								<Button
									startIcon={<DeleteIcon />}
									onClick={() => click(data._id)}
								></Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
