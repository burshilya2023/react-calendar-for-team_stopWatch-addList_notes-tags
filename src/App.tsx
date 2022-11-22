import { useAction } from "./MyHooks/StoreActionAll"
import { RouterApp } from "./router/RouterApp"
import { useEffect } from "react"
import { IUser } from "./store/SliceAll/userSlice"
function App() {
	const { setUser, setIsAuth } = useAction()

	useEffect(() => {
		if (localStorage.getItem("auth")) {
			setUser({ username: localStorage.getItem("username" || "") } as IUser)
			setIsAuth(true)
		}
	}, [setIsAuth, setUser])

	return (
		<div className='container'>
			<RouterApp />
		</div>
	)
}

export default App
