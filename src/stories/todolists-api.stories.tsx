// import React, {useEffect, useState} from 'react'
// import {todolistsAPI, TodolistType} from '../api/todolists-api'
//
// export default {
//     title: 'API'
// }
//
// /* Todolist */
//
// export const GetTodolists = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         todolistsAPI.getTodolists()
//             .then((res) => {
//                 setState(res.data);
//             })
//
//     }, [])
//
//     return <div> {JSON.stringify(state)}</div>
// }
// export const CreateTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     const [title, setTitle] = useState<string>('')
//     // useEffect(() => {
//     //     todolistsAPI.createTodolists('Books read')
//     //         .then((res) => {
//     //             setState(res.data);
//     //         })
//     // }, [])
//     const createTodolistCallback = () => {
//         todolistsAPI.createTodolists(title)
//             .then((res) => {
//                 setState(res.data);
//             })
//     }
//     return <div> {JSON.stringify(state)}
//         <div>
//             <input type="text" placeholder={'Todolist Title'} value={title} onChange={(e) => {
//                 setTitle(e.currentTarget.value)
//             }}/>
//             <button onClick={createTodolistCallback}>Create Todolist</button>
//         </div>
//
//     </div>
// }
// export const DeleteTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     const [todolistId, setTodolistId] = useState<string>('')
//     // useEffect(() => {
//     //     todolistsAPI.deleteTodolists('43064a88-00fe-4e84-8d18-1cc94d7a8ce9')
//     //         .then((res) => {
//     //             setState(res.data);
//     //         })
//     // }, [])
//     const deleteTodolistCallback = () => {
//         todolistsAPI.deleteTodolists(todolistId)
//             .then((res) => {
//                 setState(res.data);
//             })
//     }
//
//     return <div> {JSON.stringify(state)}
//         <div>
//             <input type="text" placeholder={'Todolist ID'} value={todolistId} onChange={(e) => {
//                 setTodolistId(e.currentTarget.value)
//             }}/>
//             <button onClick={deleteTodolistCallback}>Delete Todolist</button>
//         </div>
//     </div>
// }
// export const UpdateTodolistTitle = () => {
//     const [state, setState] = useState<any>(null)
//     const [todolistId, setTodolistId] = useState<string>('')
//     const [title, setTitle] = useState('')
//
//     // useEffect(() => {
//     //     todolistsAPI.updateTodolists(todolistId, title)
//     //         .then((res) => {
//     //             setState(res.data);
//     //         })
//     // }, [])
//
//     const updateTodolistCallback = () => {
//         todolistsAPI.updateTodolists(todolistId, title)
//                 .then((res) => {
//                     setState(res.data);
//                 })
//     }
//
//     return <div> {JSON.stringify(state)}
//         <div>
//             <input type="text" placeholder={'Todolist ID'} value={todolistId} onChange={(e) => {
//                 setTodolistId(e.currentTarget.value)
//             }}/>
//             <input type="text" placeholder={'Todolist Title'} value={title} onChange={(e) => {
//                 setTitle(e.currentTarget.value)
//             }}/>
//             <button onClick={updateTodolistCallback}>Update Todolist</button>
//         </div>
//     </div>
// }
//
//
// /* Task */
//
// export const GetTasks = () => {
//     const [state, setState] = useState<any>(null)
//     const [todolistId, setTodolistId] = useState<string>('')
//     // useEffect(() => {
//     //     const todolistId = '65908bab-8d6f-4778-a4c8-f0069f0a31ac'
//     //     todolistsAPI.getTasks(todolistId)
//     //         .then((res) => {
//     //             setState(res.data);
//     //         })
//     // }, [])
//
//     const getTaskCallback = () => {
//         todolistsAPI.getTasks(todolistId)
//             .then((res) => {
//                 setState(res.data);
//             })
//     }
//
//     return <div> {JSON.stringify(state)}
//         <div>
//             <input type="text" placeholder={'Todolist ID'} value={todolistId} onChange={(e) => {
//                 setTodolistId(e.currentTarget.value)
//             }}/>
//             <button onClick={getTaskCallback}>Get Todolist</button>
//         </div>
//     </div>
// }
//
// export const CreateTasks = () => {
//     const [state, setState] = useState<any>(null)
//     const [todolistId, setTodolistId] = useState<string>('')
//     const [title, setTitle] = useState<string>('')
//     // useEffect(() => {
//     //     const todolistId = '65908bab-8d6f-4778-a4c8-f0069f0a31ac'
//     //     const title = 'Html + CSS'
//     //     todolistsAPI.createTasks(todolistId, title)
//     //         .then((res) => {
//     //             setState(res.data);
//     //         })
//     // }, [])
//
//     const createTaskCallback = () => {
//         todolistsAPI.createTasks(todolistId, title)
//             .then((res) => {
//                 setState(res.data);
//             })
//     }
//
//     return <div> {JSON.stringify(state)}
//         <div>
//             <input type="text"  placeholder={'Todolist ID'} value={todolistId} onChange={(e) => {
//                 setTodolistId(e.currentTarget.value)
//             }}/>
//             <input type="text"  placeholder={'Task Title'} value={title} onChange={(e) => {
//                 setTitle(e.currentTarget.value)
//             }}/>
//             <button onClick={createTaskCallback}>Create Todolist</button>
//         </div>
//     </div>
// }
//
//
// export const DeleteTasks = () => {
//     const [state, setState] = useState<any>(null)
//     const [todolistId, setTodolistId] = useState<string>('')
//     const [taskId, setTaskId] = useState<string>('')
//
//     // useEffect(() => {
//     //     const todolistId = '65908bab-8d6f-4778-a4c8-f0069f0a31ac'
//     //     const taskID = '1767d478-66c3-4574-9738-bb25487d6d59'
//     //     todolistsAPI.deleteTasks(todolistId, taskID)
//     //         .then((res) => {
//     //             setState(res.data);
//     //         })
//     // }, [])
//
//     const deleteTaskCallback = () => {
//         todolistsAPI.deleteTasks(todolistId, taskId)
//             .then((res) => {
//                 setState(res.data);
//             })
//     }
//     return <div> {JSON.stringify(state)}
//         <div>
//             <input type="text" placeholder={'Todolist ID'}  value={todolistId} onChange={(e) => {
//                 setTodolistId(e.currentTarget.value)
//             }}/>
//             <input type="text" placeholder={'Task ID'}  value={taskId} onChange={(e) => {
//                 setTaskId(e.currentTarget.value)
//             }}/>
//             <button onClick={deleteTaskCallback}>Delete Todolist</button>
//         </div>
//     </div>
// }
//
// export const UpdateTasks = () => {
//     const [state, setState] = useState<any>(null)
//     const [todolistId, setTodolistId] = useState<string>('')
//     const [taskId, setTaskId] = useState<string>('')
//     const [title, setTitle] = useState<string>('')
//     const [description, setDescription] = useState<string>('')
//     const [status, setStatus] = useState<number>(0)
//     const [priority, setPriority] = useState<number>(0)
//
//     // useEffect(() => {
//     //     const todolistId = '65908bab-8d6f-4778-a4c8-f0069f0a31ac'
//     //     const taskID = '1dd0b1f7-ec12-4451-82a9-8fbcc0959b2d'
//     //     const title = 'React'
//     //     todolistsAPI.updateTasks(todolistId, title, taskID)
//     //         .then((res) => {
//     //         setState(res.data);
//     //     })
//     // }, [])
//
//
//     const updateTaskCallback = () => {
//         todolistsAPI.updateTasks(todolistId, taskId, {
//             title: title,
//             description: description,
//             status: status,
//             priority: priority,
//             startDate: '',
//             deadline: ''
//         })
//         .then((res) => {
//             setState(res.data);
//         })
//
//         console.log(title)
//     }
//
//     return <div> {JSON.stringify(state)}
//         <div>
//             <div>
//                 <input placeholder={'Todolist ID'}  value={todolistId} onChange={(e) => {
//                     setTodolistId(e.currentTarget.value)
//                 }}/>
//                 <input placeholder={'Task ID'}  value={taskId} onChange={(e) => {
//                     setTaskId(e.currentTarget.value)
//                 }}/>
//             </div>
//             <div>
//                 <input placeholder={'Task Title'}  value={title} onChange={(e) => {
//                     setTitle(e.currentTarget.value)
//                 }}/>
//                 <input placeholder={'Task Description'}  value={description} onChange={(e) => {
//                     setDescription(e.currentTarget.value)
//                 }}/>
//             </div>
//             <div>
//                 <input type="number" placeholder={'Task Status'}  value={status} onChange={(e) => {
//                     setStatus(+e.currentTarget.value)
//                 }}/>
//                 <input type="number" placeholder={'Task Priority'}  value={priority} onChange={(e) => {
//                     setPriority(+e.currentTarget.value)
//                 }}/>
//             </div>
//
//
//
//
//             <button onClick={updateTaskCallback}>Update Task</button>
//         </div>
//     </div>
// }


export {}