import { ModalContainer, SubtasksContainer, Subtask, StatusContainer } from './styles';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';
import { Task as TaskType } from '../../types/Task';

interface TaskModalProps{
	isTaskModalOpen: boolean;
	task: TaskType;
	subtasksCompleted: number;
}

export function TaskModal({ isTaskModalOpen, task, subtasksCompleted }: TaskModalProps) {


	return(
		<>
			{isTaskModalOpen && <ModalContainer>
				<div>
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
										<input type="checkbox" name="1" id="1" />
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