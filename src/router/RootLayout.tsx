import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useTypedSelector } from "../MyHooks/StoreActionAll"

import Login from "../pages/Login"
function RootLayout() {
	const { isAuth } = useTypedSelector(state => state.user)

	return (
		<>
			<Header />
			<main>{isAuth ? <Outlet /> : <Login />}</main>
		</>
	)
}

export default RootLayout
