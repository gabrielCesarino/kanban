import { Task } from './Task';

export interface Columns {
	name: 'TODO' | 'DOING' | 'DONE'
	tasks: Task[]
}