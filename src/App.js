import React from "react";
import Events from './dummyData/EventInfo';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  const [eventState, setEvent] = React.useState([]);
	

	React.useEffect(() => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type":"application/json" },
			body: JSON.stringify(Events),
		};
		fetch("http://localhost:5000/", requestOptions)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	React.useEffect(() => {
		fetch("http://localhost:5000/")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEvent(data);
			});
	}, []);

	return (
		<div className="App">
			{/* <h1>hello</h1>
    

			{eventState.map((st) => {
				return (
          <div>
          <h1>{st.name}</h1>
          <img src={`images/${st.image}`} alt="" onClick={(e)=>console.log(st)}/>
          
          </div>
        )
			})} */}

      <BrowserRouter>
		
    
    <Switch>
    <Route exact path="/" component={Home}/>
        
    </Switch>
   
    
  
  </BrowserRouter>



		</div>
	);
}

export default App;
