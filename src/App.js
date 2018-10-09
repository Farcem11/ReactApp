import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from "./routes/Home";
import Topic from "./routes/Topic";
import About from "./routes/About";
import TasksContainer from "./components/TasksContainer";
import { filterTasks } from './actionCreators';

export const App = ({ tasks, filterTasks }) => 
{
	return (
		<Router>
			<div className = "App">		
				<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/" className="nav-link"> Home </Link>
						</li>
						<li className="nav-item">
							<Link to = "/about" className="nav-link"> About </Link>
						</li>
						<li className="nav-item">
							<Link to="/topic" className="nav-link"> Topic </Link>
						</li>
						<li className="nav-item">
							<Link to="/tasks" className="nav-link"> Tasks {tasks.length} </Link> 
						</li>
						<input className ="form-control mr-sm-2" type="text" placeholder="Search" onChange = {filterTasks}></input>
					</ul>
				</nav>

				<img src = {logo} className = "App-logo" alt = "logo" />

				<Route exact path = "/" component = {Home}/>
				<Route path = "/about" component = {About}/>
				<Route path = "/topic" component = {Topic}/>
				<Route path = "/tasks" 
					render = 
					{
						(props) => 
							<TasksContainer 
								{...props} 
								tasks = {tasks}
							/>
					}
				/>
				
			</div>
		</Router>
	);
}

const mapStateToProps = (state) =>
{
    return {
		tasks : state.tasks
    };
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        filterTasks(text) {
            dispatch(filterTasks(text));
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)