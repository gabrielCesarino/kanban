import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { darkTheme } from './themes/dark';

import { Board as BoardType } from './types/Board';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './styles';


import server from './server';


export function App() {

	server();
	const [boards, setBoards] = useState<BoardType[]>([]);
	const [selectedBoard, setSelectedBoard] = useState('Platform Launch');
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	function selectBoard(boardName: string) {
		setSelectedBoard(boardName);
	}

	function selectTheme(){
		setIsDarkTheme(!isDarkTheme);
	}

	useEffect(() => {
		fetch('/boards')
			.then((res) => res.json())
			.then((json) => {
				setBoards(json.boards);
			});
	}, []);

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<AppContainer>
				<Header selectedBoard={selectedBoard} isDarkTheme={isDarkTheme}/>
				<main>
					<Sidebar boards={boards} handleSelectBoard={selectBoard} selectedBoard={selectedBoard} handleSelectTheme={selectTheme} checked={isDarkTheme}/>
					<Board boards={boards} selectedBoard={selectedBoard}/>
				</main>
			</AppContainer>
		</ThemeProvider>
	);
}

