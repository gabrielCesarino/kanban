import { useState } from 'react';
import { Task as TaskType } from '../../types/Task';
import { Modal } from '../Modal';
import { StatusContainer, Subtask, SubtasksContainer, TaskContainer } from './styles';

import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';

interface TaskProps {
	task: TaskType;
}

export function Task({ task }: TaskProps) {
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

	function handleOpenTaskModal() {
		setIsTaskModalOpen(true);
	}

	function closeTaskModal() {
		setIsTaskModalOpen(false);
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
			<TaskContainer onClick={handleOpenTaskModal}>
				<strong>{task.title}</strong>
				<span>{subtasksCompleted} of {task.subtasks.length} subtasks</span>
			</TaskContainer>
			{isTaskModalOpen && <Modal handleCloseTaskModal={closeTaskModal}>
				<div onClick={e => e.stopPropagation()}>
					<header>
						<strong>{task.title}</strong>
						<img src={dotsIcon} alt="Task settings" />
					</header>
					<small>{task.description}</small>
					<SubtasksContainer>
						<span>Subtasks ({subtasksCompleted} of {task.subtasks.length})</span>
						<ul>
							{task.subtasks.map((subtask) => {
								return (
									<Subtask key={subtask.title}>
										<input checked={subtask.isCompleted} type="checkbox" name="1" id="1" />
										<span>{subtask.title}</span>
									</Subtask>
								);
							})}
						</ul>
					</SubtasksContainer>
					<StatusContainer>
						<span>Current status</span>
						<select>
							<option selected>{task.status}</option>
						</select>
					</StatusContainer>
				</div>
			</Modal>}
		</>
	);
}