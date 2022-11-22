import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate
} from "react-router-dom"
import RootLayout from "./RootLayout"
import ErrorPage from "../pages/ErrorPage"
import Event from "../pages/Event"
import StopWatch from "../pages/StopWatch"
import Login from "../pages/Login"
import AppNotes from "../pages/Notes"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
			<Route index element={<Event />} />
			<Route path='/home' element={<StopWatch />} />
			<Route path='/login' element={<Login />} />
			<Route path='/notes' element={<AppNotes />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Route>
	)
)

export const RouterApp = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}
