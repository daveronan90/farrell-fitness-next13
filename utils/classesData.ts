export type Cell = string | null
export type Row = Cell[]
export type Timetable = Row[]

export const defaultClasses: Timetable = [
	[null, 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
	['6:15', null, null, null, null, null, null, null],
	['7:00', null, null, null, null, null, null, null],
	['9:30', null, null, null, null, null, null, null],
	['9:45', null, null, null, null, null, null, null],
	['10:45', null, null, null, null, null, null, null],
	['16:15', null, null, null, null, null, null, null],
	['17:30', null, null, null, null, null, null, null],
	['18:45', null, null, null, null, null, null, null]
]
