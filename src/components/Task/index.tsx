import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";

import { StatusContainer, Subtask, SubtasksContainer, TaskContainer } from "./styles";
import dotsIcon from "../../assets/icon-vertical-ellipsis.svg";
import { useRecoilState } from "recoil";
import { Task } from "../../types";
import { AnimatePresence, MotionProps, animate, motion } from "framer-motion";
import React from "react";

type TaskCardProps = MotionProps & {
	task: Task
}


export const TaskCard: React.FC<TaskCardProps> = ({task, layoutId}) => {
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
	const { register, handleSubmit, reset, unregister, formState: {errors}} = useForm();
	const [newStatus, setNewStatus] = useState(task.status);

	function handleOpenTaskModal() {
		setIsTaskModalOpen(true);
	}

	function closeTaskModal() {
		setIsTaskModalOpen(false);
	}

	// function changeTaskStatus(task: TaskType, status: "TODO" | "DOING" | "DONE", currentBoard: BoardType) {
	// 	const currentColumn = currentBoard.columns.find((column) => column.name === task.status);

	// 	if(!currentColumn){
	// 		return;
	// 	}

	// 	const actualTaskIndex = currentColumn.tasks.findIndex((currentTask) => currentTask.title === task.title);
	// 	currentColumn.tasks[actualTaskIndex].status = status;
	// 	currentColumn.tasks.splice(actualTaskIndex, 1);

	// 	const newStatusColumn = currentBoard.columns.find((column) => column.name === status);

	// 	if(!newStatusColumn){
	// 		return;
	// 	}

	// 	newStatusColumn.tasks.push(task);

	// 	const updatedColumns = currentBoard.columns.map((column) => {
	// 		if (column.name === newStatusColumn.name) {
	// 			return newStatusColumn;
	// 		}

	// 		if (column.name === currentColumn.name) {
	// 			return currentColumn;
	// 		}

	// 		return column;
	// 	});

	// 	const updatedBoard = boards.map((board) => {
	// 		if (board === currentBoard) {
	// 			return {
	// 				...board,
	// 				columns: updatedColumns
	// 			};
	// 		} else {
	// 			return board;
	// 		}
	// 	});

	// 	setBoards(updatedBoard);
	// }

	// const onSubmit = (data: any) => {
	// 	// console.log(data.status, task, boardName);
	// 	changeTaskStatus(task, data.status, currentBoard);
	// 	setNewStatus(data.status);
	// 	unregister("status");
	// 	reset();
	// };

	return (
		<>
			<TaskContainer
				as={motion.div}
				layoutId={layoutId}
				initial={{	borderRadius: "8px"}}
				onClick={handleOpenTaskModal}
				whileHover={{
					scale: [null, 1.07, 1.05]
				}}
			>
				<motion.strong layoutId={`title-${layoutId}`}>{task.name}</motion.strong>
				{/* {task.subtasks.length > 0 && <span>{0} of {task.subtasks.length} subtasks</span>} */}
			</TaskContainer>
			<AnimatePresence>
				{isTaskModalOpen && <Modal handleCloseModal={closeTaskModal}>
					<motion.div layoutId={layoutId} initial={{borderRadius: "10px"}} onClick={e => e.stopPropagation()}>
						<motion.strong layoutId={`title-${layoutId}`}>{task.name}</motion.strong>
						<motion.small initial={{y: -40, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6}}>{task.description}</motion.small>

						{/* {false && <SubtasksContainer>
						<span>Subtasks ({0} of {task.subtasks.length})</span>
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
					</SubtasksContainer>} */}
						{/* <StatusContainer>
						<span>Current status</span>
						<select value={newStatus} {...register("status", {
							onChange: handleSubmit(onSubmit)
						})}>
							<option value='TODO'>Todo</option>
							<option value='DOING'>Doing</option>
							<option value='DONE'>Done</option>
						</select>
					</StatusContainer> */}
					</motion.div>
				</Modal>}
			</AnimatePresence>
		</>
	);
};