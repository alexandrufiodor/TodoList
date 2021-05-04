import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./AppWithRedux";
import './App.css';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import {TasksStateType, TodolistType} from "./AppWithRedux";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {changeTodolistFilterAC} from "./state/todolists-reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    id: string
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (id: string) => void
    changeTodolistTitle: (todolistId: string, title: string) => void
}

export const Todolist = (props: PropsType) => {

    const dispatch = useDispatch();
    const tasks = useSelector<AppRootState, Array<TaskType>>(state => state.tasks[props.id])

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

    let allTodolistTasks = tasks
    let tasksForTodolist = allTodolistTasks

    if (props.filter === "active") {
        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
    }

    return <div>

        <h3>
            <EditableSpan title={props.title} onChange={ChangeTodolistTitle}/>
            <IconButton onClick={removeTodolistClick}>
                <Delete/>
            </IconButton>
        </h3>

        <AddItemForm id={props.id} addItem={(title) => dispatch(addTaskAC(title, props.id))}/>

        <div>
            {

                tasksForTodolist.map(t => {

                    const onClickHandle = () =>   dispatch(removeTaskAC(t.id, props.id))

                    const onChangeStatusHandle = (e: ChangeEvent<HTMLInputElement>) =>  dispatch(changeTaskStatusAC(t.id, e.currentTarget.checked, props.id))
                    const onChangeTitleHandle = (title: string) =>  dispatch(changeTaskTitleAC(t.id, title, props.id))


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