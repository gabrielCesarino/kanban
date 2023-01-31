import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAtom } from 'jotai';

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
import { boardsAtom, selectedBoardAtom } from '../../App';

interface SidebarProps {
	handleSelectTheme: () => void;
	checked: boolean;
}

type Inputs = {
	newBoardName: string
};


export function Sidebar({ handleSelectTheme, checked  }: SidebarProps) {
	const [boards, setBoards ]= useAtom(boardsAtom);
	const [selectedBoard, setSelectedBoard] = useAtom(selectedBoardAtom);
	const [hideSidebar, setHideSidebar] = useState(false);
	const [isAddNewBoardModalOpen, setIsAddNewBoardModalOpen] = useState(false);
	const {register, handleSubmit, reset, formState: {errors}, setError} = useForm<Inputs>();

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

	function handleSelectBoard(boardName: string) {
		setSelectedBoard(boardName);
	}

	const handleCreateNewBoard: SubmitHandler<Inputs> = (data: Inputs) =>{
		const newBoard: BoardType = {
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
		};

		const boardAlreadyExists = boards.find((board) => board.name === newBoard.name);

		if(boardAlreadyExists) {
			setError('newBoardName', { type: 'boardAlreadyExists', message: `'${newBoard.name}' is already in use!` });
			return;
		}

		setBoards((state) => [...state, newBoard]);
		setSelectedBoard(newBoard.name);
		closeAddNewBoardModal();
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
						<FormContainer onSubmit={handleSubmit(handleCreateNewBoard)}>
							<InputContainer>
								<small>Name</small>
								<input type="text" {...register('newBoardName', { required: true})} />
								{errors.newBoardName?.type === 'required' && <FieldError>This field is required</FieldError>}
								{errors.newBoardName?.type === 'boardAlreadyExists' && <FieldError>{errors.newBoardName?.message}</FieldError>}
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