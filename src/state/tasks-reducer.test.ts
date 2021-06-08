import {removeTodolistAC, setTodolistsAC} from './todolists-reducer';

import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses} from "../api/todolists-api";

const startState: TasksStateType = {
    "todolistId1": [
        {
            description: '1',
            title: '1',
            status: 1,
            priority: 1,
            startDate: '1',
            deadline: '1',
            id: "1",
            todoListId: 'todolistId1',
            order: 1,
            addedDate: '1' },
        {
            description: '2',
            title: '2',
            status: 2,
            priority: 2,
            startDate: '2',
            deadline: '2',
            id: "2",
            todoListId: 'todolistId1',
            order: 2,
            addedDate: '2' },
        {
            description: '3',
            title: '3',
            status: 3,
            priority: 3,
            startDate: '3',
            deadline: '3',
            id: "3",
            todoListId: 'todolistId1',
            order: 3,
            addedDate: '3' }
    ],
    "todolistId2": [
        {
            description: '1',
            title: '1',
            status: 1,
            priority: 1,
            startDate: '1',
            deadline: '1',
            id: "1",
            todoListId: 'todolistId2',
            order: 1,
            addedDate: '1' },
        {
            description: '2',
            title: '2',
            status: 2,
            priority: 2,
            startDate: '2',
            deadline: '2',
            id: "2",
            todoListId: 'todolistId2',
            order: 2,
            addedDate: '2' },
        {
            description: '3',
            title: '3',
            status: 3,
            priority: 3,
            startDate: '3',
            deadline: '3',
            id: "3",
            todoListId: 'todolistId2',
            order: 3,
            addedDate: '3' }
    ]
};

test('correct task should be deleted from correct array', () => {

    const action = removeTaskAC("1", "todolistId2");

    const endState = tasksReducer(startState, action);

    expect(endState).toEqual({
        "todolistId1": [
            {
                description: '1',
                title: '1',
                status: 1,
                priority: 1,
                startDate: '1',
                deadline: '1',
                id: "1",
                todoListId: 'todolistId1',
                order: 1,
                addedDate: '1' },
            {
                description: '2',
                title: '2',
                status: 2,
                priority: 2,
                startDate: '2',
                deadline: '2',
                id: "2",
                todoListId: 'todolistId1',
                order: 2,
                addedDate: '2' },
            {
                description: '3',
                title: '3',
                status: 3,
                priority: 3,
                startDate: '3',
                deadline: '3',
                id: "3",
                todoListId: 'todolistId1',
                order: 3,
                addedDate: '3' }
        ],
        "todolistId2": [
            // {
            //     description: '1',
            //     title: '1',
            //     status: 1,
            //     priority: 1,
            //     startDate: '1',
            //     deadline: '1',
            //     id: "1",
            //     todoListId: 'todolistId2',
            //     order: 1,
            //     addedDate: '1' },
            {
                description: '2',
                title: '2',
                status: 2,
                priority: 2,
                startDate: '2',
                deadline: '2',
                id: "2",
                todoListId: 'todolistId2',
                order: 2,
                addedDate: '2' },
            {
                description: '3',
                title: '3',
                status: 3,
                priority: 3,
                startDate: '3',
                deadline: '3',
                id: "3",
                todoListId: 'todolistId2',
                order: 3,
                addedDate: '3' }
        ]
    });
});




test('correct task should be added to correct array', () => {

    const action = addTaskAC(
        {
            description: '5',
            title: '5',
            status: 1,
            priority: 5,
            startDate: '5',
            deadline: '5',
            id: "5",
            todoListId: 'todolistId2',
            order: 1,
            addedDate: '5'
        });

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe('5');
    // expect(endState["todolistId2"][0].isDone).toBe(false);
})


test('status of specified task should be changed', () => {

    const action = changeTaskStatusAC("2", 1, "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId2"][1].status).toBe(1);
    // expect().toBe();
});


test('title of specified task should be changed', () => {

    const action = changeTaskTitleAC("2", 'Sugar', "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId2"][1].title).toBe('Sugar');
    // expect().toBe();
});




test('property with todolistId should be deleted', () => {

    const action = removeTodolistAC("todolistId2");

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});



test('empty arrays should be added when we set todolists', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const action = setTodolistsAC([
        {id: '1', title: "title 1", order: 0, addedDate: ''},
        {id: '2', title: "title 2", order: 0, addedDate: ''}
    ])

    const endState = tasksReducer({}, action);

    const keys = Object.keys(endState)
    expect(keys.length).toBe(2);
    expect(endState['1']).toStrictEqual([]);
    expect(endState['2']).toStrictEqual([]);
});
