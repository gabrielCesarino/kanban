import { Board as BoardType } from '../../types/Board';
import { Task as TaskType } from '../../types/Task';
import { Task } from '../Task';

import { BoardContainer, BoardCollumn } from './styles';

interface BoardProps {
	boards: BoardType[];
	selectedBoard: string;
}

export function Board({ boards, selectedBoard }: BoardProps) {
	const currentBoard = boards.find((board) => board.name === selectedBoard);

	return (
		<BoardContainer>
			{currentBoard?.columns.map((column) => {
				return (
					<BoardCollumn key={column.name}>
						<small>{column.name} ({column.tasks ? column.tasks.length : '0'})</small>
						{column.tasks?.map((task: TaskType) => {
							return (
								<Task key={task.title} task={task}/>
							);
						})}
					</BoardCollumn>
				);
			})}
		</BoardContainer>
	);
}