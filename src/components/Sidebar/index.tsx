import {
	AsideContainer,
	BoardsList,
	InteractionsContainer,
	Board } from './styles';
import kanbanLogo from '../../assets/logo-dark.svg';

export function Sidebar() {
	return (
		<AsideContainer>
			<img src={kanbanLogo} />
			<InteractionsContainer>
				<div>
					<small>All boards (3)</small>
					<BoardsList>
						<Board>Platform Launch</Board>
						<Board>Marketing Launch</Board>
						<Board>Roadmap</Board>
						<button>+ Create New Board</button>
					</BoardsList>
				</div>

				<footer>
					Footer
				</footer>
			</InteractionsContainer>
		</AsideContainer>
	);
}