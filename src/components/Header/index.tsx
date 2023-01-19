import { useState } from 'react';
import { HeaderContainer, ButtonsContainer, LogoContainer } from './styles';
import {  FormContainer, ButtonAddSubtask, InputContainer } from '../../styles/modalForms';
import { Modal } from '../Modal';

import kanbanLogoDark from '../../assets/logo-dark.svg';
import kanbanLogoLight from '../../assets/logo-light.svg';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';
import crossIcon from '../../assets/icon-cross.svg';

interface HeaderProps {
	selectedBoard: string;
	isDarkTheme: boolean;
}

export function Header({ selectedBoard, isDarkTheme}: HeaderProps) {
	const [isAddNewTaskModalOpen, setIsAddNewTaskModalOpen] = useState(false);

	function handleOpenAddNewTaskModal() {
		setIsAddNewTaskModalOpen(true);
	}

	function closeAddNewTaskModal() {
		setIsAddNewTaskModalOpen(false);
	}

	return(
		<HeaderContainer>
			<div>
				<LogoContainer>
					<img src={isDarkTheme ? kanbanLogoLight : kanbanLogoDark}/>
				</LogoContainer>
				<strong>{selectedBoard}</strong>
			</div>
			<ButtonsContainer>
				<button onClick={handleOpenAddNewTaskModal}>+ Add new task</button>
				<img src={dotsIcon} title="Board settings" />
			</ButtonsContainer>
			{isAddNewTaskModalOpen && <Modal handleCloseModal={closeAddNewTaskModal}>
				<div onClick={e => e.stopPropagation()}>
					<header>
						<strong>Add New Task</strong>
					</header>
					<FormContainer>
						<InputContainer>
							<small>Title</small>
							<input type="text" />
						</InputContainer>
						<InputContainer>
							<small>Description</small>
							<textarea />
						</InputContainer>
						<InputContainer>
							<small>Subtasks</small>
							<div>
								<input type="text"/>
								<img src={crossIcon} />
							</div>
							<div>
								<input type="text"/>
								<img src={crossIcon} />
							</div>
							<ButtonAddSubtask>Add new subtask</ButtonAddSubtask>
						</InputContainer>
						<InputContainer>
							<small>Status</small>
							<select>
								<option selected>Todo</option>
							</select>
						</InputContainer>
						<button type='submit'>Create task</button>
					</FormContainer>
				</div>
			</Modal>}
		</HeaderContainer>
	);
}