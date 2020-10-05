import React from "react";
import { Typography } from "@material-ui/core";

export default function NoRoute() {
	return (
		<div>
			<Typography align="center" variant="h4" style={{ marginTop: "100px" }}>
				Sorry you have come to the wrong url
			</Typography>
		</div>
	);
}
