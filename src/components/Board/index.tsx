import { useRecoilValue } from "recoil";
import { Task } from "../Task";

import { BoardContainer, BoardCollumn } from "./styles";
import { dashboards, selectedDashboard } from "../../atoms";

export function Board() {
	const availableDashboards = useRecoilValue(dashboards);
	const selectedBoard = useRecoilValue(selectedDashboard);

	return (
		<BoardContainer>
			{/* {selectedBoard.columns.map((column) => {
				return (
					<BoardCollumn key={column.name}>
						<small>
							{column.name} ({column.tasks ? column.tasks.length : '0'})
						</small>
						{column.tasks?.map((task: TaskType) => {
							return (
								<Task
									key={task.title}
									task={task}
									currentBoard={selectedBoard}
								/>
							);
						})}
					</BoardCollumn>
				);
			})} */}
		</BoardContainer>
	);
}
