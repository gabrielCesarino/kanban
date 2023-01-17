import { HeaderContainer, ButtonsContainer, LogoContainer } from './styles';

import kanbanLogo from '../../assets/logo-dark.svg';
import dotsIcon from '../../assets/icon-vertical-ellipsis.svg';

export function Header() {
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
				<img src={dotsIcon} alt="Board settings" />
			</ButtonsContainer>
		</HeaderContainer>
	);
}