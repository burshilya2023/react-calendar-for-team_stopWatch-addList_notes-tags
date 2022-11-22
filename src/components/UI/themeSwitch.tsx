import { IoMoon, IoMoonOutline } from "react-icons/io5"
import { useTheme } from "../../MyHooks/useTheme"

const ThemeSwitcher = () => {
	const [theme, toggleTheme] = useTheme()
	const ThemeIcon = theme === "dark" ? IoMoon : IoMoonOutline
	return (
		<div
			className=''
			style={{ cursor: "pointer", fontSize: "23px" }}
			onClick={toggleTheme}
		>
			<ThemeIcon />
		</div>
	)
}

export { ThemeSwitcher }
