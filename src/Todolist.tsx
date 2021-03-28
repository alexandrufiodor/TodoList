import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import './App.css';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

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
    changeTaskTitle: (id: string, title: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    changeStatus: (id: string, isDone: boolean, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (id: string) => void
    changeTodolistTitle: (todolistId: string, title: string) => void
}

export const Todolist = (props: PropsType) => {

    const onAllClickHandle = () => {
        props.changeFilter('all', props.id)
    }
    const onActiveClickHandle = () => {
        props.changeFilter('active', props.id)
    }
    const onCompletedClickHandle = () => {
        props.changeFilter('completed', props.id)
    }

    const removeTodolistClick = () => {
        props.removeTodolist(props.id)
    }

    const ChangeTodolistTitle = (title: string) => props.changeTodolistTitle(props.id, title)

    return <div>

        <h3>
            <EditableSpan title={props.title} onChange={ChangeTodolistTitle}/>
            <button onClick={removeTodolistClick}>x</button>
        </h3>

        <AddItemForm id={props.id} addTask={props.addTask}/>

        <ul>
            {

                props.tasks.map(t => {

                    const onClickHandle = () => props.removeTask(t.id, props.id)

                    const onChangeStatusHandle = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked, props.id)
                    const onChangeTitleHandle = (title: string) => props.changeTaskTitle(t.id, title, props.id)


                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={onChangeStatusHandle}/>

                        {/*<span>{t.title}</span>*/}

                        <EditableSpan title={t.title} onChange={onChangeTitleHandle}/>
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