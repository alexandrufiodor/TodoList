import React from "react";
import {FilterValuesType, TasksStateType, TodolistType} from '../AppWithRedux';
import {v1} from "uuid";
import { AddTodolistActionType } from "./todolists-reducer";

type ActionType =
     AddTodolistActionType


export const todolistTasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case 'ADD-TODOLIST': {
            let stateCopy = {...state}
            stateCopy[v1()]= []
            return stateCopy
        }

        default:
            throw new Error("I don't understand this type")
    }
}

