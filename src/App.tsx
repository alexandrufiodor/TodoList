import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active"
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TasksStateType = {
    [key: string]: Array<TaskType>
}
function App() {

    // let [tasks, setTasks] = useState<Array<TaskType>>([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false}
    // ])

    // let [filter, setFilter] = useState<FilterValuesType>('all');




    function addTask(title: string, todolistId: string) {

        let task: TaskType = {id: v1(), title: title, isDone: false}
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [task, ...todolistTasks]
        setTasks({...tasks})

    }

    function removeTask(id: string, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(t => t.id = id);
        setTasks({...tasks})
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(t => t.id === todolistId);

        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(t => t.id === id);

        if (task) {
            task.isDone = isDone;
            setTasks({...tasks})
        }
    }

    function removeTodolist(id: string) {

        setTodolists(todolists.filter(t => t.id !== id));
       delete tasks[id]
        setTasks({...tasks})
    }

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        { id: todolistId1, title: 'What to learn', filter: 'all' },
        {  id: todolistId2, title: 'What to buy', filter: 'all' }
    ])
    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Book", isDone: false},
        ]
    })
    return (
        <div className="App">
            {
                todolists.map((tl) => {

                    let tasksForTodolist = tasks[tl.id]

                    if (tl.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }


                    return <Todolist
                                     key={tl.id}
                                     title={tl.title}
                                     id={tl.id}
                                     tasks={tasksForTodolist}
                                     removeTask={removeTask}
                                     addTask={addTask}
                                     changeFilter={changeFilter}
                                     changeStatus={changeStatus}
                                     filter={tl.filter}
                                     removeTodolist = {removeTodolist}
                    />


                })

            }

        </div>
    );
}

export default App;
