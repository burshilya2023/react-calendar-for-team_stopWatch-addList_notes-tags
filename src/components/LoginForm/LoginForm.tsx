import { FC, useState, useEffect } from "react"
import { Button, Form, Input } from "antd"
import { useAction, useTypedSelector } from "../../MyHooks/StoreActionAll"
import { rules } from "../../utils/rules"
import { NavLink, useNavigate } from "react-router-dom"

const LoginForm: FC = () => {
	const { error, isLoading, isAuth } = useTypedSelector(state => state.user)

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const { login } = useAction()
	const navigate = useNavigate()
	useEffect(() => {
		setTimeout(() => {
			if (isAuth) {
				navigate("/")
			}
		}, 0)
	}, [isAuth])
	const submit = () => {
		login(username, password)
	}

	return (
		<Form onFinish={submit}>
			{error && <div style={{ color: "red" }}>{error}</div>}
			<Form.Item
				label='name user'
				name='username'
				// валидация
				rules={[rules.required("Please enter your username!")]}
			>
				<Input value={username} onChange={e => setUsername(e.target.value)} />
			</Form.Item>
			<Form.Item
				label='password'
				name='password'
				rules={[rules.required("Please enter your password")]}
			>
				<Input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type={"password"}
				/>
			</Form.Item>
			<Form.Item>
				{isAuth ? (
					<NavLink to={"/"}>
						<Button type='primary' htmlType='submit' loading={isLoading}>
							you are logged in
						</Button>
					</NavLink>
				) : (
					<Button type='primary' htmlType='submit' loading={isLoading}>
						log in
					</Button>
				)}
			</Form.Item>
		</Form>
	)
}

export default LoginForm
