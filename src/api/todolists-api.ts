import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '367b5061-81a8-4346-a38b-61dffe8fe508'
    }
})

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type TasksType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string,
    deadline: string,
    id: string,
    todoListId: string,
    order: number,
    addedDate: string
}

export type UpdateTaskModelType = {
    description: string,
    title: string,
    status: number,
    priority: number,
    startDate: string,
    deadline: string
}

export type ResponseType<D = {}> = {
    resultCode: number,
    messages: Array<string>,
    data: D
}

export type GetTaskResponse = {
    error: string | null,
    totalCount: number,
    item: TasksType[]
}

export const todolistsAPI = {
    getTodolists() {
        const promise = instance.get<Array<TodolistType>>('todo-lists')
        return promise
    },
    createTodolists(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('/todo-lists', {title: title})
        return promise
    },
    deleteTodolists(todolistId: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
        return promise
    },
    updateTodolists(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title: title})
        return promise
    },


    getTasks(todolistId: string) {
        const promise = instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`)
        return promise
    },
    createTasks(todolistId: string, title: string) {
        const promise = instance.post<ResponseType>(`todo-lists/${todolistId}/tasks`, {title: title})
        return promise
    },
    deleteTasks(todolistId: string, taskId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
        return promise
    },
    updateTasks(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        const promise = instance.put<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, {model: model})
        return promise
    },
}