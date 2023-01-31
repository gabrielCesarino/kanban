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
import { boardsAtom, selectedBoardAtom } from '../../App';
import { useAtom } from 'jotai';

interface HeaderProps {
	isDarkTheme: boolean;
}

export function Header({ isDarkTheme}: HeaderProps) {
	const [selectedBoard] = useAtom(selectedBoardAtom);
	const [boards, setBoards ]= useAtom(boardsAtom);
	const [isAddNewTaskModalOpen, setIsAddNewTaskModalOpen] = useState(false);
	const [generateSubtask, setGenerateSubtask] = useState<number>(0);
	const [subtasksFieldArray, setSubtasksFieldArray] = useState<number[]>([]);
	const { register, handleSubmit, reset, unregister, formState: {errors}} = useForm<Task>();

	function handleOpenAddNewTaskModal() {
		setIsAddNewTaskModalOpen(true);
	}

	function closeAddNewTaskModal() {
		setIsAddNewTaskModalOpen(false);
	}

	function handleAddNewSubtaskField(e: React.MouseEvent){
		e.preventDefault();
		if(subtasksFieldArray.length >= 3){
			return;
		}
		setGenerateSubtask((state) => state + 1);
		setSubtasksFieldArray((state) => [...state, generateSubtask]);
	}

	function handleDeleteField(index: number) {
		unregister(`subtasks.${index}`);
		const updatedSubstasksField = subtasksFieldArray.filter((field) => field !== subtasksFieldArray[index]);
		console.log(updatedSubstasksField);
		setSubtasksFieldArray(updatedSubstasksField);
	}

	function createNewTask(task: Task, boardName: string) {
		const currentBoard = boards.find((board) => board.name === boardName);

		if (!currentBoard) {
			return;
		}

		const currentColumnIndex = currentBoard.columns.findIndex((column) => column.name.toUpperCase() === task.status);

		currentBoard.columns[currentColumnIndex].tasks.push(task);

		const updatedBoards = boards.map((board) => {
			if (board.name === currentBoard.name) {
				return currentBoard;
			} else {
				return board;
			}
		});

		setBoards(updatedBoards);
		console.log(boards);
	}


	const onSubmit: SubmitHandler<Task> = (data: Task) => {
		createNewTask({
			title: data.title,
			description: data.description,
			status: data.status,
			subtasks: data.subtasks? data.subtasks : []
		}, selectedBoard);

		closeAddNewTaskModal();
		setSubtasksFieldArray([]);
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
				<button onClick={handleOpenAddNewTaskModal} disabled={selectedBoard === ''}>+ Add new task</button>
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
							{subtasksFieldArray.map((field, index) => {
								return (
									<div key={index}>
										<input type="text" {...register(`subtasks.${index}.title`)}/>
										<img src={crossIcon} onClick={() => handleDeleteField(index)}/>
									</div>
								);
							})}
							{subtasksFieldArray.length >= 3 && <small>Only 3 subtasks per task is allowed</small>}
							<ButtonAddSubtask onClick={handleAddNewSubtaskField}>Add new subtask</ButtonAddSubtask>
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