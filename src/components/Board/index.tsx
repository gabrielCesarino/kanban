import { useAtom } from 'jotai';
import { boardsAtom, selectedBoardAtom } from '../../App';
import { Task as TaskType } from '../../types/Task';
import { Task } from '../Task';

import { BoardContainer, BoardCollumn } from './styles';

interface BoardProps {
	changeTaskStatus: (task: TaskType, status: 'TODO' | 'DOING' | 'DONE', boardName: string) => void;
}

export function Board({ changeTaskStatus}: BoardProps) {
	const [boards]= useAtom(boardsAtom);
	const [selectedBoard] = useAtom(selectedBoardAtom);
	const currentBoard = boards.find((board) => board.name === selectedBoard);

	return (
		<BoardContainer>
			{currentBoard?.columns.map((column) => {
				return (
					<BoardCollumn key={column.name}>
						<small>{column.name} ({column.tasks ? column.tasks.length : '0'})</small>
						{column.tasks?.map((task: TaskType) => {
							return (
								<Task key={task.title} task={task} changeTaskStatus={changeTaskStatus} boardName={currentBoard.name}/>
							);
						})}
					</BoardCollumn>
				);
			})}
		</BoardContainer>
	);
}