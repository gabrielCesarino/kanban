import { BoardCollumn } from "../styles";
import { Column } from "../../../types";
import { tasksOnCorrelatedColumn } from "../../../atoms";
import { useRecoilValue } from "recoil";
import { TaskCard } from "../../Task";
import { LayoutGroup } from "framer-motion";

interface BoardColumnProps {
	currentColumn: Column
}

export const BoardColumn: React.FC<BoardColumnProps> = ({currentColumn}) => {
	const availableTasks = useRecoilValue(tasksOnCorrelatedColumn(currentColumn.name));

	return (
		<BoardCollumn key={currentColumn?.id}>
			<small>
				{currentColumn?.name}
			</small>
			<LayoutGroup>
				{availableTasks?.map((task) => {
					if(task) {
						return <TaskCard layoutId={task.id} key={task?.id} task={task} />;
					}
				})}
			</LayoutGroup>
		</BoardCollumn>
	);
};