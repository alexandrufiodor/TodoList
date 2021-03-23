import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";
import './App.css';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    id: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    changeStatus: (id: string, isDone: boolean, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist:  (id: string) => void
}


export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null);
    const addTasks = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim(), props.id);
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
        props.changeFilter('all', props.id)
    }
    const onActiveClickHandle = () => {
        props.changeFilter('active', props.id)
    }
    const onCompletedClickHandle = () => {
        props.changeFilter('completed', props.id)
    }

    const removeTodolistClick = () => {props.removeTodolist(props.id)}

    return <div>
        <h3>{props.title}  <button onClick={ removeTodolistClick }>x</button></h3>
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

                    const onClickHandle = () => props.removeTask(t.id, props.id)

                    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked, props.id)


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