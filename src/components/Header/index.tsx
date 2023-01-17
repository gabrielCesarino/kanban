import { HeaderContainer, ButtonsContainer } from './styles';

import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';

export function Header() {
	return(
		<HeaderContainer>
			<strong>Platform Launch</strong>
			<ButtonsContainer>
				<button>+ Add new task</button>
				<img src={dotsIcon} alt="Board settings" />
			</ButtonsContainer>
		</HeaderContainer>
	);
}