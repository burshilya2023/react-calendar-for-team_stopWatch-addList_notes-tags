import { FC, useState } from "react"
import { Calendar } from "antd"
import moment, { Moment } from "moment"
import { IEvent } from "../../store/SliceAll/EventSlice/types"

interface EventCalendarProps {
	events: IEvent[]
	ReturnEventData: (select: any) => void // for filtering:when selecting a calendar date, display events of that day only
}
const EventCalendar: FC<EventCalendarProps> = ({ events, ReturnEventData }) => {
	const [selectedValue, setSelectedValue] = useState(() => moment(""))
	const onSelect = (newValue: Moment) => {
		//@ts-ignore
		setSelectedValue(newValue._d) //antd select date in calendar
	}
	function dateCellRender(value: Moment) {
		const formatedDate = moment(value.toDate()).format("YYYY.MM.DD")
		const currentDayEvents = events.filter(ev => ev.date === formatedDate) //filters the day with calendar data
		const lenght = currentDayEvents.length

		return (
			<div>
				<h2 style={{ color: "cyan", textAlign: "center" }}>
					{lenght > 0 ? lenght : null}
				</h2>
			</div>
		)
	}

	ReturnEventData(moment(selectedValue).format("YYYY.MM.DD"))
	return (
		<Calendar
			dateCellRender={dateCellRender}
			onSelect={onSelect}
			className='calendar'
		/>
	)
}

export default EventCalendar
