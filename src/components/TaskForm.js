import React from 'react';
import TaskFormInput from "./TaskFormInput";
import { addTask, setTask } from '../actionCreators';
import { connect } from 'react-redux';

export const TaskForm = ({ task, addTask, setTask }) => 
{
    return (
    <div className = "card">
        <div className = "card-body">
            <TaskFormInput 
                name = "Title"
                setTask = {setTask}
                placeholder = "Title"
            />

            <TaskFormInput 
                name = "Responsable"
                setTask = {setTask}
                placeholder = "Responsable"
            />

            <TaskFormInput 
                name = "Description"
                setTask = {setTask}
                placeholder = "Description"
            />

            <div className="form-group">
                <select
                    name="Priority"
                    className="form-control"
                    onChange = {setTask}
                >
                <option>low</option>
                <option>medium</option>
                <option>high</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick = {() => addTask(task)}>
                Save
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = (state) =>
{
    return {
        task : state.task
    };
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        addTask(task) {
            dispatch(addTask(task));
       },
       setTask(name, value) {
           dispatch(setTask(name, value));
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)