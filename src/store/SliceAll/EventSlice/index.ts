import { EventState, IEvent} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IUser } from "../userSlice";
const initialState: EventState = {
    guests: [] as IUser[],
    events: [] as IEvent[]
}
export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setGuest(state,action:PayloadAction<IUser[]>){
            state.guests= action.payload
        }, 
        setEvents(state, action:PayloadAction<IEvent[]>){
            state.events=action.payload
        },
        //deleteEvents async action creator filtered the array
        removeEvents(state, action:PayloadAction<IEvent[]>){  
            state.events=action.payload
        },
    },
})
export const eventActions = eventSlice.actions;
export const eventReducer= eventSlice.reducer;