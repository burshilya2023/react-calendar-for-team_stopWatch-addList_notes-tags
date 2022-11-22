import { FC, useState } from "react"
import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import moment, { Moment } from "moment"
import { useTypedSelector } from "../../MyHooks/StoreActionAll"
import { IEvent } from "../../store/SliceAll/EventSlice/types"
import { IUser } from "../../store/SliceAll/userSlice"
import { rules } from "../../utils/rules"
interface EventFormProps {
	guests: IUser[]
	submit: (event: IEvent) => void //event collection function
}
const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
	const [event, setEvent] = useState<IEvent>({
		author: "",
		date: "",
		description: "",
		guest: ""
	} as IEvent)
	//collecting data to event
	const { users } = useTypedSelector(state => state.user) //isAuth user
	const selectDate = (date: Moment | null) => {
		if (date) {
			setEvent({
				...event,
				date: moment(date).format("YYYY.MM.DD")
			})
		}
	}
	//!(date author guest desc)
	const submitForm = () => {
		submit({
			...event,
			author: users.username,
			id: Date.now() + Math.floor(Math.random() * 33)
		})
	}

	return (
		<Form onFinish={submitForm}>
			<Form.Item
				label='description event'
				name='description'
				rules={[rules.required()]}
			>
				<Input
					onChange={e => setEvent({ ...event, description: e.target.value })}
					value={event.description}
				/>
			</Form.Item>
			<Form.Item
				label='date event'
				name='date'
				//!have problems validations //TODO: fixed
				// rules={[rules.required(), rules.isDateAfter()]}
			>
				{/* moment in have library antd */}
				<DatePicker onChange={date => selectDate(date)} />{" "}
			</Form.Item>
			<Form.Item label='select guest' name='guest' rules={[rules.required()]}>
				<Select onChange={(guest: string) => setEvent({ ...event, guest })}>
					{guests.map(guest => (
						<Select.Option key={guest.username} value={guest.username}>
							{guest.username}
						</Select.Option>
					))}
				</Select>
			</Form.Item>
			<Row justify='end'>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						create
					</Button>
				</Form.Item>
			</Row>
		</Form>
	)
}
export default EventForm
