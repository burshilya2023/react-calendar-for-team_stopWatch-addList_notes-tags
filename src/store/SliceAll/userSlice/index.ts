
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface IUser {
  username: string;
  password: string;
}
interface UserState {
    users: IUser;
    isLoading: boolean;
    error: string; 
    isAuth:boolean,
}
const initialState: UserState = {
    users: {
        username:'',
        password:''
    },
    isLoading: false,
    error: '',
    isAuth:false, 
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state,action:PayloadAction<boolean>){
            state.isAuth=action.payload
        }, 
        setIsLoading(state, action:PayloadAction<boolean>){
            state.isLoading=action.payload
        },
        setUser(state, action:PayloadAction<IUser>){
            state.isLoading=false;
            state.error=''
            state.users=action.payload
        },
        setError(state,action:PayloadAction<string>){
            state.isLoading=false;
            state.error=action.payload
        }
    },
})

export const userActions = userSlice.actions;


export const  userReducer= userSlice.reducer;