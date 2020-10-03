import React from "react";
import { CardMedia, Typography, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	media: {
		height: "100px",
		
		paddingTop: "56.25%", // 16:9
    },
    cardRoot: {
        width:'200px',
        maxWidth: 345,
        cursor: "pointer",
	},
}));
export default function WorkImages({ data }) {

    const handleEventClick = (data)=>{
        console.log(data);
    }

	const classes = useStyles();
	return (
		<Grid item lg={3} md={3} sm xs>
			<Card className={classes.cardRoot} onClick={()=>handleEventClick(data)}>
				<CardMedia className={classes.media} image={`images/${data.image}`} />
			</Card>
			<Typography variant="h6">{data.title}</Typography>
		</Grid>
	);
}
