import { Divider } from "antd"
import styled from "styled-components"
import { ResultTimer } from "../../pages/StopWatch"
import TimerTime from "./TimerTime"

import { ResultTime } from "./ResultTime"
const StopWatchWrapper = styled.div`
	.allButton {
		margin-top: 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
	}
	.result_list {
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 30px;
	}
	.forvard {
		border: 2px solid black;
		min-height: 150px;
		width: 100%;
	}
	.flex_cirlce {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		width: 30px;
		padding-bottom: 5px;
		cursor: pointer;
		border-radius: 50%;
		background-color: var(--bg-2);
		font-weight: 900;
		&:hover {
			background-color: cyan;
		}
	}
`
type EditTagsModalProps = {
	result: ResultTimer[]
	stop: boolean
	badTime: ResultTimer[]
	bestTime: ResultTimer[]
	StopWatch: () => void
	saveResult: () => void
	ClearArray: () => void
	ClearTime: () => void
	deleteBestTime: (dateNow: string) => void
	deleteBadTime: (dateNow: string) => void
	removeSaveTime: (dateNow: string) => void
	addBadTime: (id: string) => void
	addBestTime: (id: string) => void
}
export function StopWatchTime({
	StopWatch,
	stop,
	saveResult,
	ClearArray,
	result,
	addBadTime,
	addBestTime,
	badTime,
	deleteBadTime,
	bestTime,
	deleteBestTime,
	removeSaveTime,
	ClearTime
}: EditTagsModalProps) {
	return (
		<>
			<StopWatchWrapper>
				<div className='allButton'>
					{stop ? (
						<button className='button' onClick={StopWatch}>
							stop
						</button>
					) : (
						<div>
							<button className='button' onClick={StopWatch}>
								start
							</button>
						</div>
					)}
					<button className='button' onClick={ClearTime}>
						clearTime
					</button>
					<button className='button' onClick={saveResult}>
						save result
					</button>
					<button className='button' onClick={ClearArray}>
						clear counter
					</button>
				</div>
				<Divider />

				<div className='result_list'>
					<div>
						{result.map((r, id) => (
							<ResultTime
								key={id}
								id={id}
								hour={r.hour}
								min={r.min}
								sec={r.sec}
								ms={r.ms}
								dateNow={r.dateNow}
								addBestTime={addBestTime}
								addBadTime={addBadTime}
								removeSaveTime={removeSaveTime}
							/>
						))}
					</div>
					<div>
						<TimerTime
							badTime={badTime}
							deleteBestTime={deleteBestTime}
							bestTime={bestTime}
							deleteBadTime={deleteBadTime}
						/>
					</div>
				</div>
				<Divider />
			</StopWatchWrapper>
		</>
	)
}
