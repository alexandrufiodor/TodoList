// import React from 'react'
// import {Provider} from 'react-redux'
// import {combineReducers, createStore} from 'redux'
// import {v1} from 'uuid'
// import {tasksReducer} from "../../state/tasks-reducer";
// import {todolistsReducer} from "../../state/todolists-reducer";
// import {AppRootStateType} from "../../state/store";
// const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     todolists: todolistsReducer
// })
//
// const initialGlobalState = {
//     todolists: [
//         {id: "todolistId1", title: "What to learn", order: 1, addedDate: ''},
//         {id: "todolistId2", title: "What to buy",  order: 1, addedDate: ''}
//     ] ,
//     tasks: {
//         ["todolistId1"]: [
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true}
//         ],
//         ["todolistId2"]: [
//             {id: v1(), title: "Milk", isDone: true},
//             {id: v1(), title: "React Book", isDone: true}
//         ]
//     }
// };
//
// export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootStateType);
//
// export const ReduxStoreProviderDecorator = (storyFn: any) => (
//     <Provider
//         store={storyBookStore}>{storyFn()}
//     </Provider>)
//
export {}