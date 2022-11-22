import { FC, useEffect, useState } from "react"
import { Button, Layout, Modal, Row } from "antd"
import { useAction, useTypedSelector } from "../MyHooks/StoreActionAll"
import { IEvent } from "../store/SliceAll/EventSlice/types"
import EventCalendar from "../components/Event/EventCalendar"
import EventForm from "../components/Event/EventForm"
import styled from "styled-components"
import { CiSquareRemove } from "react-icons/ci"

const EventWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
	padding: 10px;
	/* background-color: var(--bg-1); */
	color: var(--text);
	margin-bottom: 150px;
	gap: 15px;
	.EventLeft {
		height: 100%;
	}
	.Eventright {
		margin-top: 33px;
		border: 1px solid black;
		padding: 10px;
		color: #050505;
		font-size: 23px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.event_description {
		padding: 10px;

		display: flex;
		background-color: #7dada4;
		justify-content: space-between;
		align-items: center;
		&:hover {
			background-color: #3f9484;
			cursor: pointer;
		}
		.remove_icon {
			height: 50px;
			margin: 0;
			padding: 1px 5px;
			border-radius: 10px;
			font-size: 2rem;
			&:hover {
				cursor: pointer;
				background-color: red;
			}
			svg {
				height: 100%;
			}
		}
	}
	.calendar {
		.ant-picker-body {
			background-color: #c5d6d5;
			.ant-picker-calendar-date-content {
				height: 50px;
			}
		}
	}
`
const Event: FC = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [toggle, setToggle] = useState(false)
	const { fetchEvents, fetchGuests, createEvent, deleteEvents } = useAction()
	const { guests, events } = useTypedSelector(state => state.event)
	const [eventCurrent, setEventCurrent] = useState<string>()
	const { users } = useTypedSelector(state => state.user)
	useEffect(() => {
		fetchEvents(users.username)
		fetchGuests()
	}, [modalVisible, toggle])
	const addNewEvent = (event: IEvent) => {
		createEvent(event)
		setModalVisible(false)
	}
	const ReturnEventData = (date: string) => {
		setEventCurrent(date)
	}
	const EventDelete = (id: number) => {
		deleteEvents(id)
		setToggle(!toggle)
	}
	const currentDayEvents = events.filter(ev => ev.date === eventCurrent)

	return (
		<Layout style={{ background: "var(--bg-2)" }}>
			<EventWrapper>
				<div className='EventLeft'>
					<Row justify='center'>
						<Button onClick={() => setModalVisible(true)}>added event</Button>
					</Row>
					<EventCalendar events={events} ReturnEventData={ReturnEventData} />
					<Modal
						title='added event'
						visible={modalVisible}
						footer={null}
						onCancel={() => setModalVisible(false)}
					>
						<EventForm guests={guests} submit={addNewEvent} />
					</Modal>
				</div>
				<div className='Eventright'>
					{currentDayEvents?.map(i => (
						<div key={i.id}>
							<div className='event_description'>
								<span>{i.description}</span>
								<span
									className='remove_icon'
									onClick={() => {
										EventDelete(i.id)
									}}
								>
									<CiSquareRemove />
								</span>
							</div>
						</div>
					))}
				</div>
				<div>
					<h2 style={{ color: "cyan" }}> task in future</h2>
					<p>adding an event to multiple users at once</p>
					<p>edit events, and create time adit events</p>
					<p>dragging events into execution and in progress</p>
					<p>progress bar in events Eventright</p>
					<p>make the style better</p>
				</div>
			</EventWrapper>
		</Layout>
	)
}

export default Event
