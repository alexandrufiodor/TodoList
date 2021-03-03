import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValuesType = "all" | "completed" | "active"

function App() {

    let [tasks, setTasks] =  useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValuesType>('all');



    function removeTask(id: number) {
        tasks = tasks.filter( t => t.id != id);
        setTasks(tasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasks = tasks.filter( t => t.isDone === true);
    }
    if (filter === "active") {
        tasks = tasks.filter( t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}  changeFilter={changeFilter} />
            {/*<Todolist title="Movies" tasks={tasks2}/>*/}
        </div>
    );
}

export default App;
