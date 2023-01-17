import { useState } from 'react';
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


export function Sidebar() {
	const [hideSidebar, setHideSidebar] = useState(false);

	function handleHideSidebar(){
		setHideSidebar(!hideSidebar);
	}

	return (
		<AsideContainer className={hideSidebar ? 'sidebarHide' : ''} >
			{
				!hideSidebar ?
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
		</AsideContainer>
	);
}