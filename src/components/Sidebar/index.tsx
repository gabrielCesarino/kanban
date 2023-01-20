import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Board as BoardType } from '../../types/Board';

import {
	AsideContainer,
	BoardsList,
	InteractionsContainer,
	Board,
	ToggleContainer,
	HideContainer,
	ToggleThemeContainer,
	ShowSidebarContainer
} from './styles';

import boardIcon from '../../assets/icon-board.svg';
import darkIcon from '../../assets/icon-dark-theme.svg';
import lightIcon from '../../assets/icon-light-theme.svg';
import hideIcon from '../../assets/icon-hide-sidebar.svg';
import showSideBarIcon from '../../assets/icon-show-sidebar.svg';

import { Modal } from '../Modal';
import { ButtonAddSubtask, FormContainer, InputContainer, FieldError } from '../../styles/modalForms';

interface SidebarProps {
	boards: BoardType[];
	selectedBoard: string;
	handleSelectBoard: (boardName: string) => void;
	handleSelectTheme: () => void;
	createNewBoard: (board:BoardType) => void;
	checked: boolean;
}

type Inputs = {
	newBoardName: string
};


export function Sidebar({ boards, selectedBoard, handleSelectBoard, handleSelectTheme, createNewBoard, checked  }: SidebarProps) {
	const [hideSidebar, setHideSidebar] = useState(false);
	const [isAddNewBoardModalOpen, setIsAddNewBoardModalOpen] = useState(false);
	const { register, handleSubmit, reset, formState: {errors}} = useForm<Inputs>();

	function handleOpenAddNewBoardModal() {
		setIsAddNewBoardModalOpen(true);
	}

	function closeAddNewBoardModal() {
		setIsAddNewBoardModalOpen(false);
	}

	function handleHideSidebar() {
		setHideSidebar(!hideSidebar);
	}

	const onSubmit: SubmitHandler<Inputs> = (data: Inputs) =>{
		createNewBoard({
			name: data.newBoardName,
			columns: [
				{
					name: 'TODO',
					tasks: []
				},
				{
					name: 'DOING',
					tasks: []
				},
				{
					name: 'DONE',
					tasks: []
				}]
		});
		closeAddNewBoardModal();
		reset();
	};

	return (
		<AsideContainer className={hideSidebar ? 'sidebarHide' : ''} >
			{
				!hideSidebar ?
					<InteractionsContainer>
						<div>
							<small>All boards (3)</small>
							<BoardsList>
								{boards.map((board) => {
									return (
										<Board
											key={board.name}
											className={board.name === selectedBoard ? 'activeBoard' : ''}
											onClick={() => handleSelectBoard(board.name)}
										>
											<img src={boardIcon} />
											<span>{board.name}</span>
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
					<ShowSidebarContainer>
						<button onClick={handleHideSidebar}>
							<img src={showSideBarIcon} alt="Show sidebar" />
						</button>
					</ShowSidebarContainer>
			}
			{isAddNewBoardModalOpen &&
				<Modal handleCloseModal={closeAddNewBoardModal}>
					<div onClick={e => e.stopPropagation()}>
						<header>
							<strong>Add New Board</strong>
						</header>
						<FormContainer onSubmit={handleSubmit(onSubmit)}>
							<InputContainer>
								<small>Name</small>
								<input type="text" {...register('newBoardName', { required: true})} />
								{errors.newBoardName && <FieldError>This field is required</FieldError>}
							</InputContainer>
							<ButtonAddSubtask>
								Create New Board
							</ButtonAddSubtask>
						</FormContainer>
					</div>
				</Modal>
			}
		</AsideContainer>
	);
}