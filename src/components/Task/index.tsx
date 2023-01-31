import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { boardsAtom } from '../../App';

import { Modal } from '../Modal';
import { Task as TaskType } from '../../types/Task';

import { StatusContainer, Subtask, SubtasksContainer, TaskContainer } from './styles';

import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';
import { Board as BoardType } from '../../types/Board';


interface TaskProps {
	task: TaskType;
	currentBoard: BoardType,
}

export function Task({ task, currentBoard }: TaskProps) {
	const [boards, setBoards]= useAtom(boardsAtom);
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
	const { register, handleSubmit, reset, unregister, formState: {errors}} = useForm();
	const [newStatus, setNewStatus] = useState(task.status);

	function handleOpenTaskModal() {
		setIsTaskModalOpen(true);
	}

	function closeTaskModal() {
		setIsTaskModalOpen(false);
	}

	function changeTaskStatus(task: TaskType, status: 'TODO' | 'DOING' | 'DONE', currentBoard: BoardType) {
		const currentColumn = currentBoard.columns.find((column) => column.name === task.status);

		if(!currentColumn){
			return;
		}

		const actualTaskIndex = currentColumn.tasks.findIndex((currentTask) => currentTask.title === task.title);
		currentColumn.tasks[actualTaskIndex].status = status;
		currentColumn.tasks.splice(actualTaskIndex, 1);

		const newStatusColumn = currentBoard.columns.find((column) => column.name === status);

		if(!newStatusColumn){
			return;
		}

		newStatusColumn.tasks.push(task);

		const updatedColumns = currentBoard.columns.map((column) => {
			if (column.name === newStatusColumn.name) {
				return newStatusColumn;
			}

			if (column.name === currentColumn.name) {
				return currentColumn;
			}

			return column;
		});

		const updatedBoard = boards.map((board) => {
			if (board === currentBoard) {
				return {
					...board,
					columns: updatedColumns
				};
			} else {
				return board;
			}
		});

		setBoards(updatedBoard);
	}

	const onSubmit = (data: any) => {
		// console.log(data.status, task, boardName);
		changeTaskStatus(task, data.status, currentBoard);
		setNewStatus(data.status);
		unregister('status');
		reset();
	};

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
				{task.subtasks.length > 0 && <span>{subtasksCompleted} of {task.subtasks.length} subtasks</span>}
			</TaskContainer>
			{isTaskModalOpen && <Modal handleCloseModal={closeTaskModal}>
				<div onClick={e => e.stopPropagation()}>
					<header>
						<strong>{task.title}</strong>
						<img src={dotsIcon} alt="Task settings" />
					</header>
					<small>{task.description}</small>
					{task.subtasks.length > 0 && <SubtasksContainer>
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
					</SubtasksContainer>}
					<StatusContainer>
						<span>Current status</span>
						<select value={newStatus} {...register('status', {
							onChange: handleSubmit(onSubmit)
						})}>
							<option value='TODO'>Todo</option>
							<option value='DOING'>Doing</option>
							<option value='DONE'>Done</option>
						</select>
					</StatusContainer>
				</div>
			</Modal>}
		</>
	);
}