import { HeaderContainer, ButtonsContainer, LogoContainer } from './styles';
import { Board as BoardType } from '../../types/Board';

import kanbanLogo from '../../assets/logo-dark.svg';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';

export function Header(props: BoardType) {
	return(
		<HeaderContainer>
			<div>
				<LogoContainer>
					<img src={kanbanLogo} />
				</LogoContainer>
				<strong>Platform Launch</strong>
			</div>
			<ButtonsContainer>
				<button>+ Add new task</button>
				<img src={dotsIcon} title="Board settings" />
			</ButtonsContainer>
		</HeaderContainer>
	);
}