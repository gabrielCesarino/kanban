import { useAtom } from 'jotai';
import { boardsAtom, selectedBoardAtom } from '../../App';
import { Task as TaskType } from '../../types/Task';
import { Task } from '../Task';

import { BoardContainer, BoardCollumn } from './styles';

export function Board() {
	const [boards]= useAtom(boardsAtom);
	const [selectedBoard, setSelectedBoard] = useAtom(selectedBoardAtom);
	const currentBoard = boards.find((board) => board.name === selectedBoard);

	if(boards.length === 1) {
		setSelectedBoard(boards[0].name);
	}

	return (
		<BoardContainer>
			{currentBoard?.columns.map((column) => {
				return (
					<BoardCollumn key={column.name}>
						<small>{column.name} ({column.tasks ? column.tasks.length : '0'})</small>
						{column.tasks?.map((task: TaskType) => {
							return (
								<Task key={task.title} task={task} currentBoard={currentBoard}/>
							);
						})}
					</BoardCollumn>
				);
			})}
		</BoardContainer>
	);
}