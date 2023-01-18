import { useEffect, useState } from 'react';
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

	function selectBoard(boardName: string) {
		setSelectedBoard(boardName);
	}

	useEffect(() => {
		fetch('/boards')
			.then((res) => res.json())
			.then((json) => {
				setBoards(json.boards);
			});
	}, []);

	console.log(boards);

	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<Header boards={boards} selectedBoard={selectedBoard}/>
				<main>
					<Sidebar boards={boards} handleSelectBoard={selectBoard} selectedBoard={selectedBoard}/>
					<Board boards={boards} selectedBoard={selectedBoard}/>
				</main>
			</AppContainer>
		</>
	);
}

