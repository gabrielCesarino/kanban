import {
	AsideContainer,
	BoardsList,
	InteractionsContainer,
	Board,
	ToggleContainer,
	HideContainer,
	ToggleThemeContainer
} from './styles';

import kanbanLogo from '../../assets/logo-dark.svg';
import boardIcon from '../../assets/icon-board.svg';
import darkIcon from '../../assets/icon-dark-theme.svg';
import lightIcon from '../../assets/icon-light-theme.svg';
import hideIcon from '../../assets/icon-hide-sidebar.svg';

export function Sidebar() {
	return (
		<AsideContainer>
			<img src={kanbanLogo} />
			<InteractionsContainer>
				<div>
					<small>All boards (3)</small>
					<BoardsList>
						<Board className="activeBoard">
							<img src={boardIcon} />
							<span>Platform Launch</span>
						</Board>
						<Board>
							<img src={boardIcon} />
							<span>Marketing Plan</span>
						</Board>
						<Board>
							<img src={boardIcon} />
							<span>Roadmap</span>
						</Board>
						<Board className="createButton">
							<img src={boardIcon} />
							<span>+ Create New Board</span>
						</Board>
					</BoardsList>
				</div>

				<footer>
					<ToggleThemeContainer>
						<img src={lightIcon} alt="Dark mode" />
						<ToggleContainer>
							<input type="checkbox" id="switch" />
							<label htmlFor="switch">Toggle</label>
						</ToggleContainer>
						<img src={darkIcon} alt="Light mode" />
					</ToggleThemeContainer>
					<HideContainer>
						<img src={hideIcon} alt="Hide sidebar" />
						<small>Hide sidebar</small>
					</HideContainer>
				</footer>
			</InteractionsContainer>
		</AsideContainer>
	);
}