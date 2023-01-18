import { HeaderContainer, ButtonsContainer, LogoContainer } from './styles';
import { Board as BoardType } from '../../types/Board';

import kanbanLogo from '../../assets/logo-dark.svg';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';
import { Modal } from '../Modal';
import { useState } from 'react';

interface HeaderProps {
	boards: BoardType[];
	selectedBoard: string;
}

export function Header({ boards, selectedBoard}: HeaderProps) {
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
					<img src={kanbanLogo} />
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
					<form>
						<small>Title</small>
						<input type="text" name="" id="" />
					</form>
				</div>
			</Modal>}
		</HeaderContainer>
	);
}