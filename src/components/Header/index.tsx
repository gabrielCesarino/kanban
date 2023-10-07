import React, { useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { v4 as uuid } from "uuid";


import { HeaderContainer, ButtonsContainer, LogoContainer } from "./styles";
import { FormContainer, ButtonAddSubtask, InputContainer, FieldError } from "../../styles/modalForms";
import { Modal } from "../Modal";
import kanbanLogoDark from "../../assets/logo-dark.svg";
import kanbanLogoLight from "../../assets/logo-light.svg";
import dotsIcon from "../../assets/icon-vertical-ellipsis.svg";
import crossIcon from "../../assets/icon-cross.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { dashboards, selectedDashboard } from "../../atoms";


interface HeaderProps {
	isDarkTheme: boolean;
}

export function Header({ isDarkTheme}: HeaderProps) {
	const selectedBoard = useRecoilValue(selectedDashboard);
	// const [columnsInBoard, setColumnsInBoard] = useRecoilState(columnsAtom(selectedBoard?.name));
	const availableDashboards = useRecoilValue(dashboards);
	const [isAddNewTaskModalOpen, setIsAddNewTaskModalOpen] = useState(false);
	// const { control, register, handleSubmit, reset, formState: {errors}} = useForm<Task>();
	// const { fields, append, remove } = useFieldArray({
	// 	control, // control props comes from useForm (optional: if you are using FormContext)
	// 	name: "subtasks",// unique name for your Field Array
	// 	shouldUnregister: true
	// });


	// function handleOpenAddNewTaskModal() {
	// 	setIsAddNewTaskModalOpen(true);
	// }

	// function closeAddNewTaskModal() {
	// 	setIsAddNewTaskModalOpen(false);
	// 	remove();
	// }

	// function handleAddNewSubtaskField(e: React.MouseEvent){
	// 	e.preventDefault();

	// 	if(fields.length < 5){
	// 		append({
	// 			title: "",
	// 			id: uuid(),
	// 			isCompleted: false,
	// 		});
	// 	}
	// }

	// function handleDeleteField(index: number) {
	// 	remove(index);
	// }

	// function createNewTask(task: Task) {
	// 	const currentTasks = columnsInBoard.map((column) => {
	// 		if(column[task.status]){
	// 			return column.tasks;
	// 		}
	// 	});

	// 	const updatedColumns = columnsInBoard.map((column) => {
	// 		if(column[task.status]) {
	// 			return {
	// 				...column,
	// 				tasks: [task]
	// 			};
	// 		}

	// 		return column;
	// 	});



	// 	const updatedTasks = [...currentTasks, task];

	// const updatedBoard: Board = {

	// };

	// selectedBoard.columns[currentColumnIndex].tasks.push(task);



	// const updatedBoards = boards.map((board) => {
	// 	if (board.name === selectedBoard.name) {
	// 		return selectedBoard;
	// 	} else {
	// 		return board;
	// 	}
	// });

	// 	setBoards(updatedBoards);
	// 	console.log(task);
	// }


	// const onSubmit: SubmitHandler<Task> = (data: Task) => {
	// 	// createNewTask({
	// 	// 	title: data.title,
	// 	// 	description: data.description,
	// 	// 	status: data.status,
	// 	// 	subtasks: data.subtasks ? data.subtasks.map((subtask) => {
	// 	// 		return (
	// 	// 			{
	// 	// 				title: subtask.title,
	// 	// 				isCompleted: false,
	// 	// 				id: uuid()
	// 	// 			}
	// 	// 		);
	// 	// 	}) : []
	// 	// });

	// 	closeAddNewTaskModal();
	// 	reset();
	// };

	return(
		<HeaderContainer>
			<div>
				<LogoContainer>
					<img src={isDarkTheme ? kanbanLogoLight : kanbanLogoDark}/>
				</LogoContainer>
				<strong>{selectedBoard?.name}</strong>
			</div>
			<ButtonsContainer>
				<button disabled={!selectedBoard}>+ Add new task</button>
				<img src={dotsIcon} title="Board settings" />
			</ButtonsContainer>
			{/* {isAddNewTaskModalOpen && <Modal handleCloseModal={closeAddNewTaskModal}>
				<div onClick={e => e.stopPropagation()}>
					<header>
						<strong>Add New Task</strong>
					</header>
					<FormContainer onSubmit={handleSubmit(onSubmit)}>
						<InputContainer>
							<small>Title</small>
							<input type="text" {...register("title", {required: true})} />
							{errors.title && <FieldError>Title is required!</FieldError>}
						</InputContainer>
						<InputContainer>
							<small>Description</small>
							<textarea {...register("description")}/>
						</InputContainer>
						<InputContainer>
							<small>Subtasks</small>
							{fields.map((field, index) => {
								return (
									<div key={field.id}>
										<input {...register(`subtasks.${index}.title`, {required: true})}/>
										<img src={crossIcon} onClick={() => handleDeleteField(index)}/>
										{errors.subtasks ? errors.subtasks[index] && <FieldError>Substask title is required!</FieldError> : null}
									</div>
								);
							})}
							<ButtonAddSubtask onClick={handleAddNewSubtaskField}>Add new subtask</ButtonAddSubtask>
						</InputContainer>
						<InputContainer>
							<small>Status</small>
							<select {...register("status")}>
								<option selected value="TODO">Todo</option>
								<option value="DOING">Doing</option>
								<option value="DONE">Done</option>
							</select>
						</InputContainer>
						<button type='submit'>Create task</button>
					</FormContainer>
				</div>
			</Modal>} */}
		</HeaderContainer>
	);
}