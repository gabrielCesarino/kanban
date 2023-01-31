import { useState } from 'react';
import { Provider, atom } from 'jotai';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { darkTheme } from './themes/dark';
import { GlobalStyle, AppContainer } from './GlobalStyle';


import { Board as BoardType } from './types/Board';

import { Board } from './components/Board';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export const boardsAtom = atom<BoardType[]>([]);
export const selectedBoardAtom = atom<string>('');

export function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	function selectTheme() {
		setIsDarkTheme(!isDarkTheme);
	}

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
			<Provider>
				<AppContainer>
					<Header
						isDarkTheme={isDarkTheme}
					/>
					<main>
						<Sidebar
							checked={isDarkTheme}
							handleSelectTheme={selectTheme}
						/>
						<Board
						/>
					</main>
				</AppContainer>
			</Provider>
			<GlobalStyle />
		</ThemeProvider>
	);
}

