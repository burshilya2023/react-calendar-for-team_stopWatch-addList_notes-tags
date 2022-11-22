import { FC } from "react"
import { useLocalStorage } from "../MyHooks/useLocalStorage"
import { NoteList } from "../components/NoteList/NoteList"
export type Note = {
	id: string
} & NoteData

export type RawNote = {
	id: string
} & RawNoteData

export type RawNoteData = {
	title: string
	markdown: string
	tagIds: string[]
}

export type NoteData = {
	title: string
	markdown: string
	tags: Tag[]
}

export type Tag = {
	id: string
	label: string
}
// !TEST NOT USED
const AppNotes: FC = ({}) => {
	const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
	const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

	return (
		<div>
			<NoteList />
		</div>
	)
}

export default AppNotes
