import { useState } from 'react';
import { HeaderContainer, ButtonsContainer, LogoContainer } from './styles';
import { Modal } from '../Modal';

import kanbanLogoDark from '../../assets/logo-dark.svg';
import kanbanLogoLight from '../../assets/logo-light.svg';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';

interface HeaderProps {
	selectedBoard: string;
	isDarkTheme: boolean;
}

export function Header({ selectedBoard, isDarkTheme}: HeaderProps) {
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
					<form>
						<small>Title</small>
						<input type="text" name="" id="" />
					</form>
				</div>
			</Modal>}
		</HeaderContainer>
	);
}