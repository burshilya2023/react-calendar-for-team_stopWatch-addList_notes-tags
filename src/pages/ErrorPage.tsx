import { useRouteError } from "react-router-dom"
import Header from "../components/Header"

function ErrorPage() {
	const error = useRouteError()
	//@ts-ignore
	const er = error?.message
	return (
		<>
			<Header />
			<main id='error-content'>
				<h1>An error occurred!</h1>
				<p>
					the mistake is in this <h2 style={{ color: "red" }}>{er}</h2>
				</p>
			</main>
		</>
	)
}

export default ErrorPage
