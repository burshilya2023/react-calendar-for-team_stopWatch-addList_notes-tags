import {createAsyncThunk} from "@reduxjs/toolkit";

import { AppDispatch } from "../..";

import UserService from "../../../api";

import { IUser, userActions } from ".";


export const AuthActionCreators = {
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(userActions.setIsLoading(true));//loader work 
            setTimeout(async () => {
                //fetch
                const response = await UserService.getUsers()
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(userActions.setUser(mockUser));
                    dispatch(userActions.setIsAuth(true))
                    
                } else {
                    dispatch(userActions.setError('Invalid username or password'));
                }
                dispatch(userActions.setIsLoading(false));//loader end work
            }, 1000)
        } catch (e) {
            dispatch(userActions.setError('An error occurred during login'))
        }
    },
    
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(userActions.setUser({} as IUser));
        dispatch(userActions.setIsAuth(false))
    }
}