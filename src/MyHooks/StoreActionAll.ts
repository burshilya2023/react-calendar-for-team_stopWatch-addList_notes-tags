import {TypedUseSelectorHook,useSelector} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import { RootState,AppDispatch } from '../store'
import { useDispatch } from "react-redux"
import {ThemeAction} from '../store/SliceAll/themeSlice'
import {userActions} from '../store/SliceAll/userSlice'
import { AuthActionCreators } from '../store/SliceAll/userSlice/ActionCreators'
import {EventActionCreators} from '../store/SliceAll/EventSlice/action-creators'
import { eventActions } from '../store/SliceAll/EventSlice'
export const useAppDispatch = () => useDispatch<AppDispatch>();



const allActions={ 
    ...ThemeAction,
    ...AuthActionCreators,
    ...userActions,
    ...EventActionCreators,
    ...eventActions,
}

export const useAction=()=>{
    const dispatch=useDispatch()
    return bindActionCreators(allActions, dispatch)
}
export const useTypedSelector: TypedUseSelectorHook<RootState>=useSelector