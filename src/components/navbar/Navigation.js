import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../logos/group.png";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ user }) => {
	const history = useHistory();

	const handleAdminRoute = () => {
		history.push("/volunteers");
	};

	return (
		<div>
			<Navbar variant="light" style={{ marginLeft: "5px" }}>
				<img
					src={logo}
					width="150"
					height="60"
					className="d-inline-block align-top"
					alt="React Bootstrap logo"
				/>
				<Nav className="ml-auto " style={{ padding: " 0 40px" }}>
					<Nav.Link>
						<Link to="/">Home</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/event">Event</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/volunteers">Volunteer List</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/volunteers/add">Add Voluntary Work</Link>
					</Nav.Link>
				</Nav>
				{user.isSignedIn ? (
					<>
						<Navbar.Brand>{user.name}</Navbar.Brand>
						<Button variant="dark" onClick={handleAdminRoute}>
							Admin
						</Button>
					</>
				) : (
					<>
						<Button
							variant="primary"
							style={{ marginRight: "10px" }}
							onClick={() => history.push("/register")}
						>
							Register
						</Button>
						<Button variant="dark" onClick={handleAdminRoute}>
							Admin
						</Button>
					</>
				)}
			</Navbar>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps)(Navigation);
