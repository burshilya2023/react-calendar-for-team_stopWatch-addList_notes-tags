import { FC } from "react"
import { Layout, Row } from "antd"
import LoginForm from "../components/LoginForm/LoginForm"
const Login: FC = () => {
	return (
		<Layout>
			<Row justify='center' align='middle'>
				<span>
					<p style={{ color: "black" }}>name:admin,user,bursh,user1,user2</p>
					<p style={{ color: "black" }}>password:123</p>
				</span>
				<div style={{ background: "white", padding: "50px" }}>
					<LoginForm />
				</div>
			</Row>
		</Layout>
	)
}

export default Login
