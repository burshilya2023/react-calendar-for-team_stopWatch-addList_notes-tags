import { FC } from "react"
import styled from "styled-components"
import { ThemeSwitcher } from "./UI/themeSwitch"
// import { motion, useTransform, MotionValue } from "framer-motion"
import { NavLink } from "react-router-dom"
import { useAction, useTypedSelector } from "../MyHooks/StoreActionAll"
import { useNavigate } from "react-router-dom"

const HeaderWrapperS = styled.div`
	display: flex;
	z-index: 100;
	box-shadow: 0 0 0 100vmax var(--bg-2, --bg-2);
	clip-path: inset(0 -100vmax);
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	overflow: hidden;
	padding: 3% 0 1% 0;
	background-color: var(--bg-2);
	gap: 20px;
	ul {
		display: flex;
		gap: 20px;
	}
`

const Header: FC = () => {
	const { logout } = useAction()
	const router = useNavigate()
	const { isAuth, users } = useTypedSelector(state => state.user)

	return (
		<HeaderWrapperS>
			<div className='flex'>
				<ThemeSwitcher />
				<ul>
					<li>
						<NavLink
							to='/'
							style={({ isActive, isPending }) => {
								return {
									color: isActive ? "red" : "inherit"
								}
							}}
						>
							event
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/home'
							style={({ isActive, isPending }) => {
								return {
									color: isActive ? "red" : "inherit"
								}
							}}
						>
							StopWatch
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/notes'
							style={({ isActive, isPending }) => {
								return {
									color: isActive ? "red" : "inherit"
								}
							}}
						>
							Notes
						</NavLink>
					</li>
				</ul>
			</div>
			<div>
				<h3>{users.username}</h3>
				{isAuth ? (
					<NavLink
						to='/login'
						style={({ isActive, isPending }) => {
							return {
								color: isActive ? "red" : "inherit"
							}
						}}
						onClick={logout}
					>
						logOut
					</NavLink>
				) : (
					<NavLink
						to='/login'
						style={({ isActive, isPending }) => {
							return {
								color: isActive ? "red" : "inherit"
							}
						}}
					>
						login
					</NavLink>
				)}
			</div>
		</HeaderWrapperS>
	)
}

export default Header
