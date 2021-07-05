import { Dispatch } from 'redux';
import { ResponseType } from '../api/todolists-api';
import {setErrorAC, setStatusAC} from '../app/app-reducer';

// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setErrorAC({error: data.messages[0]}))
    } else {
        dispatch(setErrorAC({error: 'Some error occurred'}))
    }
    dispatch(setStatusAC({status: 'failed'}))
}

export const handleServerNetworkError = (error: {message: string}, dispatch: ErrorUtilsDispatchType) => {
    dispatch(setErrorAC({error: error.message}))
    dispatch(setStatusAC({status: 'failed'}))
}

type ErrorUtilsDispatchType = Dispatch