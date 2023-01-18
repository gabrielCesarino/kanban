import { useState } from 'react';
import { Task as TaskType } from '../../types/Task';
import { TaskModal } from '../TaskModal';
import { TaskContainer } from './styles';

interface TaskProps {
	task: TaskType;
}

export function Task({ task }: TaskProps) {
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

	function handleToggleTaskModal() {
		setIsTaskModalOpen(!isTaskModalOpen);
	}

	const subtasksCompleted = task.subtasks.reduce((acc, subtask) => {
		if(subtask.isCompleted === true){
			return acc + 1;
		}else {
			return acc;
		}
	}, 0);

	return (
		<>
			<TaskContainer onClick={handleToggleTaskModal}>
				<strong>{task.title}</strong>
				<span>{subtasksCompleted} of {task.subtasks.length} subtasks</span>
			</TaskContainer>
			<TaskModal isTaskModalOpen={isTaskModalOpen}/>
		</>
	);
}