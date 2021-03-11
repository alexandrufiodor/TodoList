import React, {ChangeEvent, KeyboardEvent, ChangeEventHandler, useState} from "react";
import {FilterValuesType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>,
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    let [title, setTitle] = useState("");
    const addTasks = () => {
        props.addTask(title);
        setTitle('')
    }

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTasks()
        }
    }
    const onAllClickHandle = () => {
        props.changeFilter('all')
    }
    const onActiveClickHandle = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHandle = () => {
        props.changeFilter('completed')
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={(e) => {
                       onChangeHandle(e)
                   }}
                   onKeyPress={(e) => {
                       onKeyPressHandle(e)
                   }}
            />
            <button onClick={addTasks}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t =>  {
                    const onClickHandle = () => props.removeTask(t.id)

                        return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}   />
                        <span>{t.title}</span>
                        <button onClick={() => {onClickHandle()}}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={() => {onAllClickHandle()}}>All</button>
            <button onClick={() => {onActiveClickHandle()}}>Active</button>
            <button onClick={() => {onCompletedClickHandle()}}>Completed</button>
        </div>
    </div>
}