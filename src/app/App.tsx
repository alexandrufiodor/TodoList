import React, {useCallback, useEffect} from 'react'
import './App.css'
import {
    AppBar,
    Button,
    CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography
} from '@material-ui/core'
import {Menu, Router} from '@material-ui/icons'
import {TodolistsList} from "../features/TodolistList/TodolistsList";
import {ErrorSnackbars} from "../components/ErrorSnackbar/ErrorSnackbar";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {initializeAppTC, RequestStatusType} from "./app-reducer";
import {Login} from "../features/Login/Login";
import {BrowserRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";
import {logoutTC} from "../features/Login/auth-reducer";

function App() {

    const dispatch = useDispatch();
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])
    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    },[])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }



    return (
        <div className="App">
            <ErrorSnackbars/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {
                        isLoggedIn &&  <Button color="inherit" onClick={logoutHandler}>Log out</Button>
                    }

                </Toolbar>
            </AppBar>
            {status === 'loading' && <LinearProgress/>}
            <Container fixed>
                {/*<TodolistsList/>*/}
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} render={() => <TodolistsList/>}/>
                        <Route exact path={'/login'} render={() => <Login/>}/>
                        <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                </BrowserRouter>

            </Container>
        </div>
    )
}

export default App
