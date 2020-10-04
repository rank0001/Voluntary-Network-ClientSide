import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { CardMedia, Typography, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Table } from "@material-ui/core";
import img from '../../logos/trash-2-9.png';

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

export default function UserList({data,click}) {
	const classes = useStyles();
	return (
		<div>
			
				
                <Grid item lg={10} md={8} sm xs>
				
                
                {data.name} 
                <img src={img} alt=""/>
                
			</Grid>
                
                
		
{/*             
			<Grid item lg={2} md={2} sm xs>
				{data.email}
			</Grid> 
            
			<Grid item lg={2} md={2} sm xs>
				{data.date}
			</Grid> 
            
			<Grid item lg={2} md={2} sm xs>
				{data.event}
			</Grid> */}
		</div>
	);
}
