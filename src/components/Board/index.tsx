import { Board as BoardType } from '../../types/Board';
import { Task as TaskType } from '../../types/Task';

import { BoardContainer, BoardCollumn, Task } from './styles';

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
						<small>{column.name} ({column.tasks.length})</small>
						{column.tasks.map((task: TaskType) => {
							return (
								<Task key={task.title}>
									<strong>{task.title}</strong>
									<span>0 of {task.subtasks.length} subtasks</span>
								</Task>
							);
						})}

					</BoardCollumn>
				);
			})}
		</BoardContainer>
	);
}