import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './styles';

export function App() {

	return (
		<AppContainer>
			<GlobalStyle />
			<Sidebar />
			<main>
				<Header />
			</main>
		</AppContainer>
	);
}

