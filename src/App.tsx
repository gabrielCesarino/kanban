import { useState } from 'react';
import dataBoards from './utils/data.json';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { darkTheme } from './themes/dark';

import { Board as BoardType } from './types/Board';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GlobalStyle, AppContainer} from './GlobalStyle';


export function App() {
	const [boards, setBoards] = useState<BoardType[]>(dataBoards.boards);
	const [selectedBoard, setSelectedBoard] = useState('Platform Launch');
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	function selectBoard(boardName: string) {
		setSelectedBoard(boardName);
	}

	function selectTheme(){
		setIsDarkTheme(!isDarkTheme);
	}

	function createNewBoard(board: BoardType) {
		setBoards((state) => [...state, board]);
		console.log(boards);
	}


	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
			<GlobalStyle />
			<AppContainer>
				<Header selectedBoard={selectedBoard} isDarkTheme={isDarkTheme}/>
				<main>
					<Sidebar
						boards={boards}
						createNewBoard={createNewBoard}
						handleSelectBoard={selectBoard}
						selectedBoard={selectedBoard}
						handleSelectTheme={selectTheme}
						checked={isDarkTheme}
					/>
					<Board boards={boards} selectedBoard={selectedBoard}/>
				</main>
			</AppContainer>
		</ThemeProvider>
	);
}

