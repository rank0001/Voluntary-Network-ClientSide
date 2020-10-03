import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../logos/group.png";
import { connect } from "react-redux";
import { useHistory,Link} from "react-router-dom";

const Navigation = ({user}) => {
    const history = useHistory();

    
    const handleAdminRoute = ()=>{

    }


	return (
		<div>
			<Navbar bg="light" variant="light">
				<img
					src={logo}
					width="130"
					height="60"
					className="d-inline-block align-top"
					alt="React Bootstrap logo"
				/>
				<Nav className="ml-auto">
					<Nav.Link ><Link to='/'>Home</Link></Nav.Link>
					<Nav.Link href="/">Donation</Nav.Link>
					<Nav.Link href="/">Events</Nav.Link>
					<Nav.Link href="/">Blog</Nav.Link>
				</Nav>
                {user.isSignedIn?
                (
                    <Navbar.Brand >{user.name}</Navbar.Brand>  
                ):(
                    <>
					<Button variant="primary" style={{marginRight:'10px'}}onClick={()=>history.push('/register')}>Register</Button>
					<Button variant="dark" onclick={handleAdminRoute}>Admin</Button>
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
