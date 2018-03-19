import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from './actionType';
let newTaskId = 0;

export const addNewTask= (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName
    };
}

export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId,
    }
}