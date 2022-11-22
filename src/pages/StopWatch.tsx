import moment from "moment"
import React from "react"
import { StopWatchTime } from "../components/StopWatchTime/StopWatchTime"
import { useLocalStorage } from "../MyHooks/useLocalStorage"

//TODO:
//!1)типизация сохраняемых данных
//?2)создание стейта секундомера +ref для значение которое не будет удалятся при рендере компоненты из-за постояного рендера миллисекунд секундомера
//!3)boolean значение для кнопки стоп секундомера
//?4)Сам интервал со значением 100, для миллисекунд
//!5)состояния массива данных, для сохранения времени секундомера
export type ResultTimer = {
	dateNow: string
	hour: string
	min: string
	sec: string
	ms: string
}
const Home = () => {
	const [day, setDay] = useLocalStorage<string>("day", "00")
	const [hour, sethour] = useLocalStorage<string>("hour", "00")
	const [min, setMin] = useLocalStorage<string>("min", "00")
	const [sec, setSec] = useLocalStorage<string>("sec", "00")
	const [ms, setMs] = useLocalStorage<string>("ms", "00")
	let [dateTime, setdateTime] = useLocalStorage<number>("dateTime", 0)
	const [result, setResult] = useLocalStorage<ResultTimer[]>("ResultTimer", [])
	const [stop, setStop] = useLocalStorage<boolean>("stopWatch", false)
	const [badTime, setBadTime] = useLocalStorage<ResultTimer[]>("badTime", [])
	const [bestTime, setBestTime] = useLocalStorage<ResultTimer[]>("bestTime", [])

	React.useEffect(() => {
		if (!stop) {
			return
		}
		let timer = setInterval(() => {
			setdateTime(prev => prev + 100)
			let DateTimer = new Date(dateTime)
			setMs(String(`00` + DateTimer.getUTCMilliseconds()).slice(-3, -1))
			setSec(String("0" + DateTimer.getUTCSeconds()).slice(-2))
			setMin(String("0" + DateTimer.getUTCMinutes()).slice(-2))
			sethour(String("0" + DateTimer.getUTCHours()).slice(-2))
			if (hour === "23" && min === "59" && sec === "59") {
				setTimeout(() => {
					setDay(prev => prev + 1)
				}, 2000)
			}
		}, 100)
		return () => {
			clearInterval(timer)
		}
	}, [stop, dateTime, setdateTime])
	const saveResult = async () => {
		if (stop == true) {
			const dateNow = moment().format("MMMM Do YYYY, h:mm:ss a")
			setResult([...result, { dateNow, hour, min, sec, ms }])
		}
	}
	const StopWatch = () => {
		setStop(!stop)
	}
	const ClearArray = () => {
		if (window.confirm("are you sure?")) {
			setResult([])
			setStop(false)
		}
	}
	const ClearTime = () => {
		if (window.confirm("clear stopWatch? are you sure?")) setdateTime(0)
	}

	const removeSaveTime = (dateNow: string) => {
		setResult(result.filter(obj => obj.dateNow !== dateNow))
	}

	//!bad
	const addBadTime = (dateNow: string) => {
		const result2 = result.slice().find(obj => obj.dateNow === dateNow)
		if (result2) {
			setBadTime([...badTime, result2])
		}
	}
	const deleteBadTime = (dateNow: string) => {
		const time = badTime.filter(obj => obj.dateNow !== dateNow)
		if (time) {
			setBadTime(time)
		}
	}

	//!best
	const addBestTime = (id: string) => {
		const result2 = result.slice().find(obj => obj.dateNow === id)
		if (result2) {
			setBestTime([...bestTime, result2])
		}
	}
	const deleteBestTime = (dateNow: string) => {
		const time = bestTime.filter(obj => obj.dateNow !== dateNow)
		if (time) {
			setBestTime(time)
		}
	}

	return (
		<div>
			<h2 style={{ color: "cyan", marginTop: "50px" }}>
				day-{day} hour-{hour} min-{min} sec-{sec} ms-{ms}
			</h2>

			<StopWatchTime
				result={result}
				stop={stop}
				StopWatch={StopWatch}
				saveResult={saveResult}
				ClearArray={ClearArray}
				removeSaveTime={removeSaveTime}
				addBadTime={addBadTime}
				addBestTime={addBestTime}
				badTime={badTime}
				deleteBadTime={deleteBadTime}
				bestTime={bestTime}
				deleteBestTime={deleteBestTime}
				ClearTime={ClearTime}
			/>
		</div>
	)
}

export default Home
