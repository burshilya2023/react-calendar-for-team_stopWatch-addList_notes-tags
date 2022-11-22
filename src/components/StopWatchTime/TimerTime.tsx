import { FC } from "react"
import styled from "styled-components"
import { ResultTimer } from "../../pages/StopWatch"

type Item = {
	badTime: ResultTimer[]
	bestTime: ResultTimer[]
	deleteBadTime: (dateNow: string) => void
	deleteBestTime: (dateNow: string) => void
}

const TimerWrapper = styled.div`
	.wrapperTime {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`

const TimerTime: FC<Item> = ({
	badTime,
	bestTime,
	deleteBadTime,
	deleteBestTime
}) => {
	return (
		<TimerWrapper>
			<div className='wrapperTime'>
				<div className='bestTime'>
					<h3 style={{ color: "cyan" }}>
						best time{" "}
						<span style={{ color: "black", cursor: "pointer" }}>clear</span>{" "}
					</h3>
					<p style={{ fontSize: "10px" }}>added time best your task</p>
					<div>
						{bestTime.map((obj, id) => (
							<div
								key={id}
								style={{
									border: "1px solid gray",
									display: "flex",
									justifyContent: "space-around"
								}}
							>
								<p style={{ fontSize: "12px" }}>
									{obj.hour}h:{obj.min}min:{obj.sec}sec
								</p>

								<span onClick={() => deleteBestTime(obj.dateNow)}>X</span>
							</div>
						))}
					</div>
				</div>
				<div className='badTime'>
					<h3 style={{ color: "red" }}>
						bad time{" "}
						<span style={{ color: "black", cursor: "pointer" }}>clear</span>{" "}
					</h3>
					<p style={{ fontSize: "10px" }}>
						add your bad time for analysis and output in the future
					</p>
					{badTime.map((obj, id) => (
						<div
							key={id}
							style={{
								border: "1px solid gray",
								display: "flex",
								justifyContent: "space-around"
							}}
						>
							<p style={{ fontSize: "12px" }}>
								{obj.hour}h:{obj.min}min:{obj.sec}sec
							</p>
							<span onClick={() => deleteBadTime(obj.dateNow)}>X</span>
						</div>
					))}
				</div>
			</div>
		</TimerWrapper>
	)
}

export default TimerTime
