import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
	AsideContainer,
	BoardsList,
	InteractionsContainer,
	Board,
	ToggleContainer,
	HideContainer,
	ToggleThemeContainer,
	ShowSidebarContainer
} from "./styles";

import boardIcon from "../../assets/icon-board.svg";
import darkIcon from "../../assets/icon-dark-theme.svg";
import lightIcon from "../../assets/icon-light-theme.svg";
import hideIcon from "../../assets/icon-hide-sidebar.svg";
import showSideBarIcon from "../../assets/icon-show-sidebar.svg";

import { Modal } from "../Modal";
import { ButtonAddSubtask, FormContainer, InputContainer, FieldError } from "../../styles/modalForms";
import { useRecoilState, useRecoilValue } from "recoil";
import { dashboards, selectedDashboard } from "../../atoms";
import { Dashboard } from "../../types";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "styled-components";

interface SidebarProps {
	handleSelectTheme: () => void;
	checked: boolean;
}

type Inputs = {
	newBoardName: string
};


export function Sidebar({ handleSelectTheme, checked  }: SidebarProps) {
	const availableDashboards = useRecoilValue(dashboards);
	const [selectedBoard, setSelectedBoard] = useRecoilState(selectedDashboard);
	const [hideSidebar, setHideSidebar] = useState(false);
	const [isAddNewBoardModalOpen, setIsAddNewBoardModalOpen] = useState(false);
	const {register, handleSubmit, reset, formState: {errors}, setError} = useForm<Inputs>();
	const theme = useTheme();

	function handleOpenAddNewBoardModal() {
		setIsAddNewBoardModalOpen(true);
	}

	function closeAddNewBoardModal() {
		setIsAddNewBoardModalOpen(false);
		reset();
	}

	function handleHideSidebar() {
		setHideSidebar(!hideSidebar);
	}

	function handleSelectBoard(board?: Dashboard) {
		setSelectedBoard(board);
	}

	const handleCreateNewBoard: SubmitHandler<Inputs> = (data: Inputs) =>{
		// const newBoard: BoardType = {
		// 	name: data.newBoardName,
		// 	columns: [
		// 		{
		// 			name: 'TODO',
		// 			tasks: []
		// 		},
		// 		{
		// 			name: 'DOING',
		// 			tasks: []
		// 		},
		// 		{
		// 			name: 'DONE',
		// 			tasks: []
		// 		}]
		// };

		// const boardAlreadyExists = boards.find((board) => board.name === newBoard.name);

		// if(boardAlreadyExists) {
		// 	setError('newBoardName', { type: 'boardAlreadyExists', message: `'${newBoard.name}' is already in use!` });
		// 	return;
		// }

		// setBoards((state) => [...state, newBoard]);
		// setSelectedBoard(newBoard);
		closeAddNewBoardModal();
	};

	return (
		<AsideContainer
			as={motion.aside}
			animate={hideSidebar ? "hide" : "showing"}
			initial={hideSidebar ? "hide" : "showing"}
			variants={{
				"hide": {
					width: 0,
					borderRight: "1px solid rgba(168, 164, 255, 0.5)",
					borderRadius: "0",
				},
				"showing": {
					width: "16rem",
					borderRadius: "0 0 20px 20px",
					borderRight: "1px solid rgba(168, 164, 255, 0.25)",
				}
			}}
			transition={{
				duration: 0.2,
				borderRight: {
					duration: 0.2,
					delay: 0.7,
					type: "tween",
				},
				borderRadius: {
					duration: 0.2,
					delay: 0.5,
					type: "tween",
				}
			}}
		>

			<AnimatePresence>
				{!hideSidebar ?
					<InteractionsContainer
						as={motion.div}
						initial={{ x: -300}}
						animate={{x: 0}}
						exit={{ x: - 300}}
						transition={{
							duration: 0.25
						}}
					>
						<div>
							<small>All boards ({availableDashboards?.length})</small>
							<BoardsList>
								{availableDashboards?.map((availableDashboard) => {
									return availableDashboard && (
										<Board
											as={motion.div}
											animate={availableDashboard === selectedBoard ? "active" : "false"}
											initial={"false"}
											variants={{
												"active": {
													backgroundColor: theme.colors.purple,
													borderRadius: "0 40px 40px 0",
													color: theme.colors.white,
												},
												"false": {
													backgroundColor: theme.colors.primary,
													borderRadius: "0 40px 40px 0",
												}
											}}
											transition={{ type: "spring", stiffness: 100 }}

											key={availableDashboard.name}
											onClick={() => handleSelectBoard(availableDashboard)}
										>
											<img src={boardIcon} />
											<span>{availableDashboard.name}</span>
										</Board>
									);
								})}
								<Board onClick={handleOpenAddNewBoardModal} className="createButton">
									<img src={boardIcon} />
									<span>+ Create New Board</span>
								</Board>
							</BoardsList>
						</div>
						<footer>
							<ToggleThemeContainer>
								<img src={lightIcon} alt="Dark mode" />
								<ToggleContainer>
									<input type="checkbox" id="switch" onChange={handleSelectTheme} checked={checked} />
									<label htmlFor="switch">Toggle</label>
								</ToggleContainer>
								<img src={darkIcon} alt="Light mode" />
							</ToggleThemeContainer>
							<HideContainer onClick={handleHideSidebar}>
								<img src={hideIcon} alt="Hide sidebar" />
								<small>Hide sidebar</small>
							</HideContainer>
						</footer>
					</InteractionsContainer>
					:
					<AnimatePresence>
						<ShowSidebarContainer as={motion.div}
							initial={{ x: -300}}
							animate={{x: 0}}
							exit={{ x: - 300}}
							transition={{
								duration: 0.5,
								delay: 0.25,
							}} >
							<button onClick={handleHideSidebar}>
								<img src={showSideBarIcon} alt="Show sidebar" />
							</button>
						</ShowSidebarContainer>
					</AnimatePresence>
				}
			</AnimatePresence>

			<AnimatePresence>
				{isAddNewBoardModalOpen &&
				<Modal handleCloseModal={closeAddNewBoardModal}>
					<div onClick={e => e.stopPropagation()}>
						<header>
							<strong>Add New Board</strong>
						</header>
						<FormContainer onSubmit={handleSubmit(handleCreateNewBoard)}>
							<InputContainer>
								<small>Name</small>
								<input type="text" {...register("newBoardName", { required: true})} />
								{errors.newBoardName?.type === "required" && <FieldError>This field is required</FieldError>}
								{errors.newBoardName?.type === "boardAlreadyExists" && <FieldError>{errors.newBoardName?.message}</FieldError>}
							</InputContainer>
							<ButtonAddSubtask>
							Create New Board
							</ButtonAddSubtask>
						</FormContainer>
					</div>
				</Modal>
				}
			</AnimatePresence>
		</AsideContainer>
	);

}