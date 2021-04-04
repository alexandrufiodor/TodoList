import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import './App.css';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
            {/*<Button onClick={removeTodolistClick} variant={"contained"} color={"primary"}>x</Button>*/}
            <IconButton onClick={removeTodolistClick}>
                <Delete/>
            </IconButton>
        </h3>

        <AddItemForm id={props.id} addTask={props.addTask}/>

        <div>
            {

                props.tasks.map(t => {

                    const onClickHandle = () => props.removeTask(t.id, props.id)

                    const onChangeStatusHandle = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked, props.id)
                    const onChangeTitleHandle = (title: string) => props.changeTaskTitle(t.id, title, props.id)


                    return <div key={t.id} className={t.isDone ? 'is-done' : ''}>
                        <Checkbox color="primary"
                               checked={t.isDone}
                               onChange={onChangeStatusHandle}/>

                        {/*<span>{t.title}</span>*/}

                        <EditableSpan title={t.title} onChange={onChangeTitleHandle}/>
                        <IconButton onClick={() => {
                            onClickHandle()
                        }}>
                            <Delete/>
                        </IconButton>

                    </div>
                })
            }
        </div>
        <div style={{padding: '10px'}}>
            <Button variant={props.filter === 'all' ? 'contained' : 'text'} color={"default"}  onClick={() => {
                onAllClickHandle()
            }}>All
            </Button>
            <Button variant={props.filter === 'active' ? 'contained' : 'text'} color={"primary"}  onClick={() => {
                onActiveClickHandle()
            }}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'contained' : 'text'} color={"secondary"} onClick={() => {
                onCompletedClickHandle()
            }}>Completed
            </Button>
        </div>
    </div>
}