import {Dispatch} from "redux";
import {authAPI} from "../api/todolists-api";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const InitialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

const appSlice = createSlice({
    name: 'app',
    initialState: InitialState,
    reducers: {
        setErrorAC: (state, action: PayloadAction<{error: string | null}>) => {
            state.error = action.payload.error
        },
        setIsInitializedAC: (state, action: PayloadAction<{isInitialized: boolean}>) => {
            state.isInitialized = action.payload.isInitialized
        },
        setStatusAC: (state, action: PayloadAction<{status: RequestStatusType}>) => {
            state.status = action.payload.status
        }
    }
})

export const appReducer = appSlice.reducer
export const {setErrorAC, setIsInitializedAC, setStatusAC} = appSlice.actions



export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC({status: 'loading'}))
    authAPI.me()
        .then((res) => {

            if (res.data.resultCode === 0) {
                const action = setIsLoggedInAC({value: true})
                dispatch(action)
            } else {
                handleServerAppError(res.data, dispatch)
            }
            dispatch(setIsInitializedAC({isInitialized: true}))
        })
}

// export const appReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case 'APP/SET-STATUS':
//             return {...state, status: action.status}
//         case 'APP/SET-ERROR':
//             return {...state, error: action.error}
//         case 'APP/SET-INITIALIZED':
//             return {...state, isInitialized: action.isInitialized}
//         default:
//             return state
//     }
// }

// export const setErrorAC = (error: string | null) => ({
//     type: 'APP/SET-ERROR', error: error
// } as const)
// export const setIsInitializedAC  = (isInitialized: boolean) => ({
//     type: 'APP/SET-INITIALIZED', isInitialized: isInitialized
// } as const)
//
// export const setStatusAC = (status: RequestStatusType) => ({
//     type: 'APP/SET-STATUS', status: status
// } as const)



// export type setErrorActionType = ReturnType<typeof setErrorAC>
// export type setStatusActionType = ReturnType<typeof setStatusAC>
// export type setIsInitializedActionType = ReturnType<typeof setIsInitializedAC>

// export type ActionsType = setErrorActionType | setStatusActionType | setIsInitializedActionType
