import axios from "axios";
import 
{
    ADD_TASK,
    REMOVE_TASK,
    LOAD_TASKS,
    SET_TASK,
    FILTER_TASKS
} from './constants/ActionTypes';

const addTask = (task) =>
{
    return {
        type : ADD_TASK,
        task
    }
}

const removeTask = (id) =>
{
    return {
        type : REMOVE_TASK,
        id
    }
}

const setTask = (event) =>
{
    const { name, value } = event.target;

    return {
        type : SET_TASK,
        name, 
        value
    }
}

const loadTasks = () =>
{
    return dispatch => 
    {
        return axios.get('http://localhost:3001/tasks')
        .then(response => 
        {
            dispatch(
            {
                type : LOAD_TASKS,
                tasks : response.data
            });
        })
    };
}

const filterTasks = (event) =>
{
    const text = event.target.value;
    return {
        type : FILTER_TASKS,
        text
    }
}

export { addTask, removeTask, setTask, loadTasks, filterTasks }