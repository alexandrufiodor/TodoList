import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active"

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValuesType>('all');


    function addTask(title: string) {
        let task: TaskType = {id: v1(), title: title, isDone: false}
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    function removeTask(id: string) {
        tasks = tasks.filter(t => t.id != id);
        setTasks(tasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    // let tasksForTodolist = tasks;

    if (filter === "completed") {
        tasks = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasks = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} addTask={addTask}
                      changeFilter={changeFilter}/>
            {/*<Todolist title="Movies" tasks={tasks2}/>*/}
        </div>
    );
}

export default App;
