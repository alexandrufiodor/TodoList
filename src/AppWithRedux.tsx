import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";

export type FilterValuesType = "all" | "completed" | "active"
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {

    const dispatch = useDispatch();
    const todolists = useSelector<AppRootState, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)


    function removeTodolist(id: string) {
        const action = removeTodolistAC(id)
        dispatch(action)
    }

    function addTodolist(title: string) {
        const action = addTodolistAC(title)
        dispatch(action)
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(value, todolistId)
        dispatch(action)
    }

    function changeTodolistTitle(todolistId: string, title: string) {
        const action = changeTodolistTitleAC(todolistId, title)
        dispatch(action)

    }


    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit" style={{marginLeft: 'auto'}}>Login</Button>
                </Toolbar>
            </AppBar>

            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm id={v1()} addItem={addTodolist}/>

                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map((tl) => {

                            // let tasksForTodolist = tasks[tl.id]
                            //
                            // if (tl.filter === "active") {
                            //     tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                            // }
                            // if (tl.filter === "completed") {
                            //     tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                            // }


                            return <Grid item>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist
                                        key={tl.id}
                                        title={tl.title}
                                        id={tl.id}
                                        changeTodolistTitle={changeTodolistTitle}
                                        changeFilter={changeFilter}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                    />
                                </Paper>
                            </Grid>

                        })

                    }
                </Grid>

            </Container>


        </div>
    );
}

export default AppWithRedux;
