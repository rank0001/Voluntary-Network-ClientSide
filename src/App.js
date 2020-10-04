import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddWork from "./components/Admin/AddWork";
import Volunteer from "./components/Admin/Volunteer";
import Event from "./components/EventDetails/Event";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navigation from "./components/navbar/Navigation";
import RegisterEvent from "./components/register/RegisterEvent";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/register" component={RegisterEvent} />
					<Route path="/login" component={Login} />
					<Route path="/event" component={Event} />
					<Route exact path="/volunteers" component={Volunteer} />
					<Route path="/volunteers/add" component={AddWork} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
