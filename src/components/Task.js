import React, {Component} from "react";

export default class Task extends Component
{
	render()
	{
		return (
			<div className = "col-md-4">
					<div className = "card mt-4">
						<div className = "card-header">
							<h3>{this.props.task.Title}</h3>
							<span className = "badge badge-pill badge-danger ml-2">
								{this.props.task.Priority}
							</span>
						</div>
						<div className = "card-body">
							<p>{this.props.task.Description}</p>
							<p>{this.props.task.Responsable}</p>
						</div>
						<div className = "card-footer">
							<button className = "btn btn-danger" onClick = {() => this.props.removeTask(this.props.task.id)}>
								Remove
							</button>
						</div>
					</div>
			</div>
		);
	}
};