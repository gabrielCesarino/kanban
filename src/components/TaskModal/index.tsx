import { ModalContainer, SubtasksContainer, Subtask, StatusContainer } from './styles';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';
import { Task as TaskType } from '../../types/Task';
import { useEffect } from 'react';

interface TaskModalProps{
	isTaskModalOpen: boolean;
	task: TaskType;
	subtasksCompleted: number;
	handleCloseTaskModal: () => void;
}

export function TaskModal({ isTaskModalOpen, task, subtasksCompleted, handleCloseTaskModal}: TaskModalProps) {
	useEffect(() => {
		document.addEventListener('keyup', (e) => {
			if(e.key === 'Escape'){
				handleCloseTaskModal();
			}
		});

		return () => {
			document.removeEventListener('keyup', () => handleCloseTaskModal);
		};
	}, []);


	return(
		<>
			{isTaskModalOpen && <ModalContainer onClick={handleCloseTaskModal}>
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
			</ModalContainer>}
		</>
	);
}