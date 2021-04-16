import React from "react";
import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from '../App';

type ActionType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    title: string,
    todolistId: string
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    filter: FilterValuesType
    id: string,
}

export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id: string,
    title: string
}


export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(t => t.id !== action.id)
        }
        case 'ADD-TODOLIST': {

            return [...state, {
                id: action.todolistId,
                filter: 'all',
                title: action.title
            }]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            let todolist = state.find(t => t.id === action.id);

            if (todolist) {
                todolist.filter = action.filter;
                return [...state]
            }
        }
        case 'CHANGE-TODOLIST-TITLE': {
            let todolist = state.find(t => t.id === action.id);
            if (todolist) {
                todolist.title = action.title;
                return [...state]
            }
        }

        default:
            throw new Error("I don't understand this type")
    }
}


export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
}
export const addTodolistAC = (title: string): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', title: title, todolistId: v1()}
}
export const changeTodolistTitleAC = (todolistId: string, title: string): ChangeTodolistTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', id: todolistId, title: title}
}
export const changeTodolistFilterAC = (filter: FilterValuesType, todolistId: string): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: todolistId}
}
