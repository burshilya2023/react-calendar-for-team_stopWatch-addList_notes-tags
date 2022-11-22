import { IUser } from ".";


export interface userState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
    count:number;
}


export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}


