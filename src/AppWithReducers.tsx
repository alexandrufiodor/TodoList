// import React, {useReducer } from 'react';
// import './App.css';
// import {TaskType, Todolist} from "./Todolist";
// import {v1} from "uuid";
// import {AddItemForm} from "./AddItemForm";
// import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
// import {Menu} from "@material-ui/icons";
// import {
//     addTodolistAC,
//     changeTodolistFilterAC,
//     changeTodolistTitleAC,
//     removeTodolistAC,
//     todolistsReducer
// } from "./state/todolists-reducer";
// import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";
//
// export type FilterValuesType = "all" | "completed" | "active"
// export type TodolistType = {
//     id: string
//     title: string
//     filter: FilterValuesType
// }
// export type TasksStateType = {
//     [key: string]: Array<TaskType>
// }
//
// function AppWithReducers() {
//
//     let todolistId1 = v1();
//     let todolistId2 = v1();
//
//
//     let [todolists, dispatchTodolistsReducer] = useReducer(todolistsReducer, [
//         {id: todolistId1, title: 'What to learn', filter: 'all'},
//         {id: todolistId2, title: 'What to buy', filter: 'all'}
//     ])
//     let [tasks, dispatchTasksReducer] = useReducer(tasksReducer, {
//         [todolistId1]: [
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true}
//         ],
//         [todolistId2]: [
//             {id: v1(), title: "Milk", isDone: true},
//             {id: v1(), title: "Book", isDone: false},
//         ]
//     })
//
//     function addTask(title: string, todolistId: string) {
//         const action = addTaskAC(title, todolistId)
//         dispatchTasksReducer(action)
//     }
//
//     function removeTask(id: string, todolistId: string) {
//         const action = removeTaskAC(id, todolistId)
//         dispatchTasksReducer(action)
//     }
//
//     function changeStatus(id: string, isDone: boolean, todolistId: string) {
//         const action = changeTaskStatusAC(id, isDone, todolistId)
//         dispatchTasksReducer(action)
//
//     }
//
//     function changeTaskTitle(id: string, title: string, todolistId: string) {
//         const action = changeTaskTitleAC(id, title, todolistId)
//         dispatchTasksReducer(action)
//     }
//
//     function removeTodolist(id: string) {
//         const action = removeTodolistAC(id)
//         dispatchTodolistsReducer(action)
//         dispatchTasksReducer(action)
//     }
//
//     function addTodolist(title: string) {
//         const action = addTodolistAC(title)
//         dispatchTodolistsReducer(action)
//         dispatchTasksReducer(action)
//     }
//
//     function changeFilter(value: FilterValuesType, todolistId: string) {
//         const action = changeTodolistFilterAC(value, todolistId)
//         dispatchTodolistsReducer(action)
//     }
//
//     function changeTodolistTitle(todolistId: string, title: string) {
//         const action = changeTodolistTitleAC(todolistId, title)
//         dispatchTodolistsReducer(action)
//
//     }
//
//
//     return (
//         <div className="App">
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" aria-label="menu">
//                         <Menu/>
//                     </IconButton>
//                     <Typography variant="h6">
//                         News
//                     </Typography>
//                     <Button color="inherit" style={{marginLeft: 'auto'}}>Login</Button>
//                 </Toolbar>
//             </AppBar>
//
//             <Container fixed>
//                 <Grid container style={{padding: "20px"}}>
//                     <AddItemForm id={v1()} addTask={addTodolist}/>
//
//                 </Grid>
//                 <Grid container spacing={3}>
//                     {
//                         todolists.map((tl) => {
//
//                             let tasksForTodolist = tasks[tl.id]
//
//                             if (tl.filter === "active") {
//                                 tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
//                             }
//                             if (tl.filter === "completed") {
//                                 tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
//                             }
//
//
//                             return <Grid item>
//                                 <Paper style={{padding: "10px"}}>
//                                     <Todolist
//                                         key={tl.id}
//                                         title={tl.title}
//                                         id={tl.id}
//                                         tasks={tasksForTodolist}
//                                         removeTask={removeTask}
//                                         addTask={addTask}
//                                         changeTaskTitle={changeTaskTitle}
//                                         changeTodolistTitle={changeTodolistTitle}
//                                         changeFilter={changeFilter}
//                                         changeStatus={changeStatus}
//                                         filter={tl.filter}
//                                         removeTodolist={removeTodolist}
//                                     />
//                                 </Paper>
//                             </Grid>
//
//                         })
//
//                     }
//                 </Grid>
//
//             </Container>
//
//
//         </div>
//     );
// }
//
// export default AppWithReducers;

export {}