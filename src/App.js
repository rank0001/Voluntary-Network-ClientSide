import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import RegisterEvent from "./components/register/RegisterEvent";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
          <Route path="/register" component = {RegisterEvent}/>
          <Route path="/login" component = {Login}/>
          
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
