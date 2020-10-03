import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import logo from '../../logos/group.png';
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "45ch",
		},
	},
}));

const  RegisterEvent = ({user})=> {
    
    const classes = useStyles();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

	return (

        
        
		<div>
        
            <img src={logo} alt="" style={{width:'100%',height:'auto',textAlign:'center'}}/>
			<form className={classes.root} noValidate autoComplete="off" align="center" onSubmit={handleSubmit}>
				<TextField id="standard-basic" label="Full Name" placeholder="enter name"/> 
                <br/>
                <TextField id="standard-basic" label="Email" placeholder="Enter email"/> 
                <br/>
                <TextField id="standard-basic" label="Date" placeholder="Enter date"/> 
                <br/>
                <TextField id="standard-basic" label="Description" placeholder="enter description"/>
                <br/> 
                <TextField id="standard-basic" label="Details" />
                <br/>
                <Button variant="contained" color="primary" type="submit">
                    Registration
                </Button>
			</form>
		</div>
	);
}

const mapStateToProps = (state) => {
    console.log(state.user);
	return { user: state.user };
};
export default connect(mapStateToProps)(RegisterEvent);
