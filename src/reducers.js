import 
{
    ADD_TASK,
    REMOVE_TASK,
    LOAD_TASKS,
    SET_TASK,
    FILTER_TASKS
} from './constants/ActionTypes'

const initialStateTask = {
    Title : '',
    Responsable : '',
    Description : '',
    Priority : 'Low'
}

const filterTasksText = (filterTasksText = "", action) =>
{
    if(action.type === FILTER_TASKS)
    {
        return action.text;
    }
    return filterTasksText;
}

const tasks = (tasks = [], action) =>
{
    if(action.type === ADD_TASK)
    {
        return [...tasks, action.task]
    }
    else if(action.type === REMOVE_TASK)
    {
        return tasks.filter(task => task.id !== action.id);
    }
    else if(action.type === LOAD_TASKS)
    {
        return action.tasks;
    }
    return tasks;
};

const task = (task = initialStateTask, action) => 
{
    if(action.type === SET_TASK)
    {
        task[action.name] = action.value
        return task;
    }
    return task;
}

export { tasks, task, filterTasksText }