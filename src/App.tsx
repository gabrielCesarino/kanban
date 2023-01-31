import { useState } from 'react';
import { Provider, atom, useAtom } from 'jotai';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { darkTheme } from './themes/dark';

import { Board as BoardType } from './types/Board';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GlobalStyle, AppContainer } from './GlobalStyle';
import { Task } from './types/Task';

export const boardsAtom = atom<BoardType[]>([]);
export const selectedBoardAtom = atom<string>('');

export function App() {
	const [boards, setBoards] = useAtom(boardsAtom);
	const [selectedBoard, setSelectedBoard] = useAtom(selectedBoardAtom);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	function selectBoard(boardName: string) {
		setSelectedBoard(boardName);
	}


	function selectTheme() {
		setIsDarkTheme(!isDarkTheme);
	}

	function changeTaskStatus(task: Task, status: 'TODO' | 'DOING' | 'DONE', boardName: string) {
		const currentBoard = boards.find((board) => board.name === boardName);
		const currentColumn = currentBoard?.columns.find((column) => column.name === task.status);
		const actualTaskIndex = currentColumn?.tasks?.findIndex((currentTask) => currentTask.title === task.title);
		currentColumn!.tasks[actualTaskIndex!].status = status;
		currentColumn?.tasks?.splice(actualTaskIndex!, 1);

		const newStatusColumn = currentBoard?.columns.find((column) => column.name === status);
		newStatusColumn?.tasks.push(task);

		const updatedColumns = currentBoard?.columns.map((column) => {
			if (column.name === newStatusColumn?.name) {
				return newStatusColumn;
			}

			if (column.name === currentColumn?.name) {
				return currentColumn;
			}

			return column;
		});

		const updatedBoard = boards.map((board) => {
			if (board.name === boardName) {
				return {
					...board,
					columns: updatedColumns!
				};
			} else {
				return board;
			}
		});

		console.log(currentBoard);
		console.log('this is the current column', currentColumn);
		console.log(newStatusColumn);
		setBoards(updatedBoard);
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
							changeTaskStatus={changeTaskStatus}
						/>
					</main>
				</AppContainer>
			</Provider>
			<GlobalStyle />
		</ThemeProvider>
	);
}

