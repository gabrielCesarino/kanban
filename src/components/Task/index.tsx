import { Task as TaskType } from '../../types/Task';
import { TaskContainer } from './styles';

interface TaskProps {
	task: TaskType;
}

export function Task({ task }: TaskProps) {

	const subtasksCompleted = task.subtasks.reduce((acc, subtask) => {
		if(subtask.isCompleted === true){
			return acc + 1;
		}else {
			return acc;
		}
	}, 0);

	return (
		<TaskContainer>
			<strong>{task.title}</strong>
			<span>{subtasksCompleted} of {task.subtasks.length} subtasks</span>
		</TaskContainer>
	);
}