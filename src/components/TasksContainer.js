import React from 'react';
import Task from "./Task";
import TaskForm from "./TaskForm";
import { removeTask } from '../actionCreators';
import { connect } from 'react-redux';
import { getFilteredTasks } from '../selectors/FilterTasks';

export const TasksContainer = ({tasks, removeTask}) =>
{
	const tasksList = tasks.map((task, index) => 
	{
		return (
		<Task
			key = {index}
			task = {task}
			removeTask = {removeTask}
		/>
		)
	});
	
	return (
		<div className="container">
			<div className="row mt-4">
				<div className="col-md-4 text-center">
					<TaskForm/>
				</div>
				<div className = "col-md-8">
					<div className = "row">
						{tasksList}
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) =>
{
    return {
		tasks : getFilteredTasks(state)
    };
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        removeTask(id) {
            dispatch(removeTask(id));
	   }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)