export interface Task{
	title: string,
	description: string,
	status: 'TODO' | 'DOING' | 'DONE',
	subtasks: Subtask[] | []
}

export interface Subtask{
	title: string,
	isCompleted: boolean,
	id: string
}