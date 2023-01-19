export interface Task{
	title: string,
	description: string,
	status: 'TODO' | 'DOING' | 'DONE',
	subtasks: Subtask[]
}

interface Subtask{
	title: string,
	isCompleted: boolean
}