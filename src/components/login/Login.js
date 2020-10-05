import React from "react";
import Button from "@material-ui/core/Button";
import { userInfo } from "../../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import firebase from "../../configs/FirebaseConfig";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../logos/group.png";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: "auto",
			width: theme.spacing(100),
			height: theme.spacing(50),
			background: "whitesmoke",
		},
	},
}));

const Login = (props) => {
	const classes = useStyles();
	const [errorMessage, setMessage] = React.useState({
		error: "",
	});
	let data = null;
	console.log(props);
	if (props.location.state) {
		data = props.location.state.data;
	}

	const history = useHistory();
	const provider = new firebase.auth.GoogleAuthProvider();
	const handleSignInWithGoogle = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
				const { displayName } = result.user;
				const signedInUser = {
					user: {
						isSignedIn: true,
						name: displayName,
						email: result.user.email,
					},
				};
				props.userInfo(signedInUser);
				const location = {
					pathname: "/register",
					state: { data },
				};
				if (props.location.state) history.push(location);
				else history.push("/register");
			})
			.catch(function (err) {
				const error = err.message;
				const newUserInfo = { ...errorMessage };
				newUserInfo.errorMessage = error;
				setMessage(newUserInfo);
			});
	};

	return (
		<div>
			<img
				src={logo}
				alt=""
				style={{
					margin: "auto",
					display: "block",
					maxWidth: "100%",
					maxHeight: "100%",
					height: "80px",
				}}
			/>
			<div
				style={{ textAlign: "center", marginTop: "40px" }}
				className={classes.root}
			>
				<Paper variant="outlined">
					<Typography variant="h5" style={{ marginTop: "100px" }}>
						Login
					</Typography>

					<Button
						style={{ borderRadius: "15px", width: "80%", marginTop: "10px" }}
						variant="contained"
						color="primary"
						onClick={handleSignInWithGoogle}
					>
						Continue With Google
					</Button>
					<Typography variant="h6" style={{ marginTop: "100px" }}>
						{errorMessage.error}
					</Typography>
				</Paper>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps, { userInfo })(Login);
