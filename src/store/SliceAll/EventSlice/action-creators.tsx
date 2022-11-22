import { eventActions } from "."
import { AppDispatch } from "../.."
import UserService from "../../../api"
import { IEvent } from "./types"

export const EventActionCreators = {
	fetchGuests: () => async (dispatch: AppDispatch) => {
		try {
			const response = await UserService.getUsers()
			dispatch(eventActions.setGuest(response.data))
		} catch (e) {
			alert(e)
		}
	},
	createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
		try {
			const json = UserService.getEventFromStorage()
			json.push(event)

			setTimeout(() => {
				dispatch(eventActions.setEvents(json))
			}, 0)
			localStorage.setItem("events", JSON.stringify(json))
		} catch (e) {
			alert(e)
		}
	},
	fetchEvents: (username: string) => (dispatch: AppDispatch) => {
		try {
			const json = UserService.getEventFromStorage()
			const currentUserEvents = json.filter(
				ev => ev.author === username || ev.guest === username
			)
			setTimeout(() => {
				dispatch(eventActions.setEvents(currentUserEvents))
			}, 0)
		} catch (e) {
			alert(e)
		}
	},
	deleteEvents: (id: number) => (dispatch: AppDispatch) => {
		try {
			const json = UserService.getEventFromStorage()
			const getEventFromStorage = json.filter(ev => ev.id !== id)
			dispatch(eventActions.removeEvents(getEventFromStorage))
			localStorage.setItem("events", JSON.stringify(getEventFromStorage))
		} catch (e) {
			alert(e)
		}
	}
}
