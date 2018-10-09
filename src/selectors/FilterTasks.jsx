import { createSelector } from 'reselect';

const getFilterTasksText = state => state.filterTasksText.toLowerCase()
const getTasks = state => state.tasks

export const getFilteredTasks = createSelector([getFilterTasksText, getTasks], (filterTasksText, tasks) => 
{
    return tasks.filter(task => filterTasksText === '' || task.Responsable.toLowerCase().includes(filterTasksText))
})