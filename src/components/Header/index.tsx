import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { HeaderContainer, ButtonsContainer, LogoContainer } from './styles';
import { FormContainer, ButtonAddSubtask, InputContainer } from '../../styles/modalForms';
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
	const { register, handleSubmit, reset, formState: {errors}} = useForm<Task>();

	function handleOpenAddNewTaskModal() {
		setIsAddNewTaskModalOpen(true);
	}

	function closeAddNewTaskModal() {
		setIsAddNewTaskModalOpen(false);
	}


	const onSubmit: SubmitHandler<Task> = (data: Task) => {
		createNewTask({
			title: data.title,
			description: data.description,
			status: data.status,
			subtasks: data.subtasks
		}, selectedBoard);

		closeAddNewTaskModal();
		reset();
	};

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
					<FormContainer onSubmit={handleSubmit(onSubmit)}>
						<InputContainer>
							<small>Title</small>
							<input type="text" {...register('title', {required: true})} />
						</InputContainer>
						<InputContainer>
							<small>Description</small>
							<textarea {...register('description')}/>
						</InputContainer>
						<InputContainer>
							<small>Subtasks</small>
							<div>
								<input type="text" {...register(`subtasks.${0}.title`)}/>
								<img src={crossIcon} />
							</div>
							<ButtonAddSubtask>Add new subtask</ButtonAddSubtask>
						</InputContainer>
						<InputContainer>
							<small>Status</small>
							<select {...register('status')}>
								<option selected value="TODO">Todo</option>
								<option value="DOING">Doing</option>
								<option value="DONE">Done</option>
							</select>
						</InputContainer>
						<button type='submit'>Create task</button>
					</FormContainer>
				</div>
			</Modal>}
		</HeaderContainer>
	);
}