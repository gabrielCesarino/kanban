import React, { useState } from 'react';
import { HeaderContainer, ButtonsContainer, LogoContainer } from './styles';
import {  FormContainer, ButtonAddSubtask, InputContainer } from '../../styles/modalForms';
import { Modal } from '../Modal';

import kanbanLogoDark from '../../assets/logo-dark.svg';
import kanbanLogoLight from '../../assets/logo-light.svg';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';
import crossIcon from '../../assets/icon-cross.svg';
import { Task } from '../../types/Task';

interface HeaderProps {
	selectedBoard: string;
	isDarkTheme: boolean;
	createNewTask: (task: Task, boardName: string) => void;
}

export function Header({ selectedBoard, isDarkTheme, createNewTask}: HeaderProps) {
	const [isAddNewTaskModalOpen, setIsAddNewTaskModalOpen] = useState(false);
	const [newTaskName, setNewTaskName] = useState('');

	function handleOpenAddNewTaskModal() {
		setIsAddNewTaskModalOpen(true);
	}

	function closeAddNewTaskModal() {
		setIsAddNewTaskModalOpen(false);
	}

	function handleNewTaskName(e: React.ChangeEvent<HTMLInputElement>) {
		setNewTaskName(e.currentTarget.value);
	}

	function handleCreateNewTask() {
		createNewTask({
			title: newTaskName,
			description: 'Nova task',
			status: 'TODO',
			subtasks: []
		}, selectedBoard);

		closeAddNewTaskModal();
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
					<FormContainer onSubmit={(e) => e.preventDefault()}>
						<InputContainer>
							<small>Title</small>
							<input onChange={handleNewTaskName} type="text" />
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
						<button type='submit' onClick={handleCreateNewTask}>Create task</button>
					</FormContainer>
				</div>
			</Modal>}
		</HeaderContainer>
	);
}