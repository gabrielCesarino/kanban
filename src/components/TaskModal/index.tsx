import { ModalContainer, SubtasksContainer, Subtask, StatusContainer } from './styles';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';

interface TaskModalProps{
	isTaskModalOpen: boolean;
}

export function TaskModal({ isTaskModalOpen }: TaskModalProps) {


	return(
		<>
			{isTaskModalOpen && <ModalContainer>
				<div>
					<header>
						<strong>Research pricing points of various competitors and trial different business models</strong>
						<img src={dotsIcon} alt="Task settings" />
					</header>
					<small>We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</small>
					<SubtasksContainer>
						<span>Subtasks (2 of 3)</span>
						<ul>
							<Subtask>
								<input type="checkbox" name="1" id="1" />
								<span>Talk to potential customers about our proposed solution and ask for fair price expectancy</span>
							</Subtask>
							<Subtask>
								<input type="checkbox" name="1" id="1" />
								<span>Talk to potential customers about our proposed solution and ask for fair price expectancy</span>
							</Subtask>
						</ul>
					</SubtasksContainer>
					<StatusContainer>
						<span>Current status</span>
						<select>
							<option>Doing</option>
						</select>
					</StatusContainer>
				</div>
			</ModalContainer>}
		</>
	);
}