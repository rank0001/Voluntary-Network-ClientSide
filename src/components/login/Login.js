import React from "react";
import Button from "@material-ui/core/Button";
import { userInfo } from "../../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import firebase from "../../configs/FirebaseConfig";
const Login = (props) => {
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
			.catch(function (error) {
				// Handle Errors here.
				// const errorMessage = error.message;
				// const newUserInfo = { ...user };
				// newUserInfo.error = errorMessage;
				// setUser(newUserInfo);
			});
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h3>Login With </h3>
			<Button
				variant="contained"
				color="primary"
				onClick={handleSignInWithGoogle}
			>
				Continue With Google
			</Button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps, { userInfo })(Login);
