import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { darkTheme } from './themes/dark';

import { Board as BoardType } from './types/Board';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GlobalStyle, AppContainer} from './GlobalStyle';
import { Task } from './types/Task';


export function App() {
	const [boards, setBoards] = useState<BoardType[]>([]);
	const [selectedBoard, setSelectedBoard] = useState('');
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

	function createNewTask(task: Task, boardName: string){
		const currentBoard = boards.find((board) => board.name === boardName);

		if(!currentBoard){
			return;
		}

		const currentColumnIndex = currentBoard.columns.findIndex((column) => column.name.toUpperCase() === task.status);

		currentBoard.columns[currentColumnIndex].tasks.push(task);

		const updatedBoards = boards.map((board) => {
			if(board.name === currentBoard.name){
				return currentBoard;
			}else {
				return board;
			}
		});

		setBoards(updatedBoards);
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
			if(column.name === newStatusColumn?.name){
				return newStatusColumn;
			}

			if(column.name === currentColumn?.name){
				return currentColumn;
			}

			return column;
		});

		const updatedBoard = boards.map((board) => {
			if(board.name === boardName){
				return {
					...board,
					columns: updatedColumns
				};
			}else {
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
			<GlobalStyle />
			<AppContainer>
				<Header
					selectedBoard={selectedBoard}
					isDarkTheme={isDarkTheme}
					createNewTask={createNewTask}
				/>
				<main>
					<Sidebar
						boards={boards}
						createNewBoard={createNewBoard}
						handleSelectBoard={selectBoard}
						selectedBoard={selectedBoard}
						handleSelectTheme={selectTheme}
						checked={isDarkTheme}
					/>
					<Board
						boards={boards}
						selectedBoard={selectedBoard}
						changeTaskStatus={changeTaskStatus}
					/>
				</main>
			</AppContainer>
		</ThemeProvider>
	);
}

