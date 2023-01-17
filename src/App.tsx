import { Board } from './components/Board';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './styles';

export function App() {

	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Header />
				<main>
					<Sidebar />
					<Board />
				</main>
			</AppContainer>

		</>
	);
}

