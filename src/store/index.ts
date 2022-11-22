import {configureStore} from '@reduxjs/toolkit'
import { eventReducer } from './SliceAll/EventSlice'
import { themeReducer } from './SliceAll/themeSlice'
import {userReducer} from './SliceAll/userSlice'



export const store= configureStore({
    reducer:{
        theme:themeReducer,
        user:userReducer,
        event:eventReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
