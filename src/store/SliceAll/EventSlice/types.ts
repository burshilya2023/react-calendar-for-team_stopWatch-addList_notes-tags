import { IUser } from "../userSlice";



export interface IEvent {
    id:number,
    author: string;
    guest: string;
    date: string;
    description: string;
}

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}
 



