import { TasksStateType } from '../AppWithRedux';
import {TaskType} from "../Todolist";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType, todolistId1, todolistId2} from "./todolists-reducer";

type ActionType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType

export type RemoveTaskActionType = {  type: 'REMOVE-TASK', taskId: string, todolistId: string }

export type AddTaskActionType = { type: 'ADD-TASK', title: string, todolistId: string }

export type ChangeTaskStatusActionType = { type: 'CHANGE-TASK-STATUS', taskId: string, isDone: boolean, todolistId: string }

export type ChangeTaskTitleActionType = { type: 'CHANGE-TASK-TITLE', taskId: string, title: string, todolistId: string }


const initialState: TasksStateType = {
    [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "Book", isDone: false},
    ]
}


export const tasksReducer = (state = initialState, action: ActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let stateCopy = {...state}
            let tasks = stateCopy[action.todolistId]
            stateCopy[action.todolistId] = tasks.filter(t => t.id !== action.taskId);

            return stateCopy
        }
        case 'ADD-TASK': {
            let task: TaskType = {id: v1(), title: action.title, isDone: false}
            let stateCopy = {...state}
            let tasks = stateCopy[action.todolistId]
            stateCopy[action.todolistId] = [task, ...tasks]
            return stateCopy
        }

        case 'CHANGE-TASK-STATUS': {
            let stateCopy = {...state}
            let tasks = stateCopy[action.todolistId]
            stateCopy[action.todolistId] = tasks.map( t => t.id === action.taskId ? {...t, isDone: action.isDone} : t)

            return stateCopy
        }

        case 'CHANGE-TASK-TITLE': {
            let stateCopy = {...state}
            let tasks = stateCopy[action.todolistId]

            stateCopy[action.todolistId] = tasks.map( t => t.id === action.taskId ? {...t, title: action.title} : t)

            return stateCopy
        }
        case 'ADD-TODOLIST': {
            let stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy
        }
        case 'REMOVE-TODOLIST': {
            let stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }
        default:

            return state
    }
}


export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title: title, todolistId: todolistId}
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
    return {
        type: "CHANGE-TASK-STATUS",
        taskId: taskId,
        isDone: isDone,
        todolistId: todolistId
    }
}


export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
    return {
        type: "CHANGE-TASK-TITLE",
        taskId: taskId,
        title: title,
        todolistId: todolistId
    }
}
