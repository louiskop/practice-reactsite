import React, { Component } from 'react';
import Navbar from "./components/navbar"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Post from "./components/Post"

class App extends Component {
	
	render(){
		return(
			<BrowserRouter>
				<div className='todo-app'>
					<Navbar/>
					<Switch>
						<Route path="/about" component={ About }/>
						<Route path="/home" component={ Home }/>
						<Route path="/:post_id" component={ Post }/>
					</Switch>
				</div>
			</BrowserRouter>
		)	
	}
}
export default App;
