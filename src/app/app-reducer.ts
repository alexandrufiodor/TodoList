import {Dispatch} from "redux";
import {authAPI} from "../api/todolists-api";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";

const InitialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export const setErrorAC = (error: string | null) => ({
    type: 'APP/SET-ERROR', error: error
} as const)
export const setIsInitializedAC  = (isInitialized: boolean) => ({
    type: 'APP/SET-INITIALIZED', isInitialized: isInitialized
} as const)

export const setStatusAC = (status: RequestStatusType) => ({
    type: 'APP/SET-STATUS', status: status
} as const)

export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    authAPI.me()
        .then((res) => {

            if (res.data.resultCode === 0) {
                const action = setIsLoggedInAC(true)
                dispatch(action)
            } else {
                handleServerAppError(res.data, dispatch)
            }
            dispatch(setIsInitializedAC(true))
        })
}

export type setErrorActionType = ReturnType<typeof setErrorAC>
export type setStatusActionType = ReturnType<typeof setStatusAC>
export type setIsInitializedActionType = ReturnType<typeof setIsInitializedAC>

export type ActionsType = setErrorActionType | setStatusActionType | setIsInitializedActionType
