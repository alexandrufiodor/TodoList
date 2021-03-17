import React, {ChangeEvent, KeyboardEvent, ChangeEventHandler, useState} from "react";
import {FilterValuesType} from "./App";
import './App.css';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>,
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter: (value: FilterValuesType) => void
    changeStatus: (id: string, isDone: boolean) => void
    filter: string
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null);
    const addTasks = () => {
        if (title.trim() !== '') {
            props.addTask(title);
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
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
                   className={error ? "error" : ''}
            />
            <button onClick={addTasks}>+</button>
            {error && <div className='error-message'>{error}</div>}

        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandle = () => {
                        props.removeTask(t.id)
                    }
                    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeStatus(t.id, newIsDoneValue)
                    }

                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={onChangeHandle}/>

                        <span>{t.title}</span>
                        <button onClick={() => {
                            onClickHandle()
                        }}>x
                        </button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={() => {
                onAllClickHandle()
            }}>All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={() => {
                onActiveClickHandle()
            }}>Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={() => {
                onCompletedClickHandle()
            }}>Completed
            </button>
        </div>
    </div>
}