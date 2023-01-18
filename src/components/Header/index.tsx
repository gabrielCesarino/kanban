import { HeaderContainer, ButtonsContainer, LogoContainer } from './styles';
import { Board as BoardType } from '../../types/Board';

import kanbanLogo from '../../assets/logo-dark.svg';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';

interface HeaderProps {
	boards: BoardType[];
	selectedBoard: string;
}

export function Header({ boards, selectedBoard}: HeaderProps) {
	return(
		<HeaderContainer>
			<div>
				<LogoContainer>
					<img src={kanbanLogo} />
				</LogoContainer>
				<strong>{selectedBoard}</strong>
			</div>
			<ButtonsContainer>
				<button>+ Add new task</button>
				<img src={dotsIcon} title="Board settings" />
			</ButtonsContainer>
		</HeaderContainer>
	);
}