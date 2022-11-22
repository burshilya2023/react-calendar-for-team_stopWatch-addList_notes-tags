import styled from "styled-components"
import { CiSquareRemove } from "react-icons/ci"
import ModalWindow from "../UI/ModalWindow"
import { useLocalStorage } from "../../MyHooks/useLocalStorage"

type EditTagsModalProps = {
	id: number
	hour: string
	min: string
	sec: string
	ms: string
	dateNow: string
	removeSaveTime: (dateNow: string) => void
	addBadTime: (id: string) => void
	addBestTime: (id: string) => void
}

export function ResultTime({
	id,
	hour,
	min,
	sec,
	ms,
	dateNow,
	addBestTime,
	addBadTime,
	removeSaveTime
}: EditTagsModalProps) {
	const [toggle, setToggle] = useLocalStorage<boolean>(`${dateNow}`, false)
	function addBestTime1(dateNow: string) {
		addBestTime(dateNow)
		setToggle(!toggle)
	}
	function addBadTime1(dateNow: string) {
		addBadTime(dateNow)
		setToggle(!toggle)
	}

	return (
		<>
			<div className='flex'>
				<span>{id + 1}</span>
				<div key={id}>
					{hour + "ч-"}
					{min + "m-"}
					{sec}с-
					{ms}мс
					<div style={{ color: "red", fontSize: "10px" }}>{dateNow}</div>
				</div>
				<span>
					{" "}
					<CiSquareRemove
						onClick={() => removeSaveTime(dateNow)}
						fontSize={"large"}
						style={{ cursor: "pointer" }}
					/>
				</span>
				{toggle ? (
					<p>in list</p>
				) : (
					<div className='flex'>
						<button
							className='button'
							style={{ color: "cyan" }}
							onClick={() => addBestTime1(dateNow)}
						>
							best
						</button>
						<button
							className='button'
							style={{ color: "red" }}
							onClick={() => addBadTime1(dateNow)}
						>
							{" "}
							bad
						</button>
					</div>
				)}
				<ModalWindow title={". . ."}>
					<div style={{ color: "red" }}>under development</div>
				</ModalWindow>
			</div>
		</>
	)
}
