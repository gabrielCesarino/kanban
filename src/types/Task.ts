export interface Task{
	title: string,
	description: string,
	status: string,
	subtasks: Subtask[]
}

interface Subtask{
	title: string,
	isCompleted: boolean
}