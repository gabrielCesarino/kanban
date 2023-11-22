import { useRecoilValue } from "recoil";

import { BoardContainer } from "./styles";
import { columnsOnSelectedDash, selectedDashboard, tasksOnCorrelatedColumn } from "../../atoms";
import { BoardColumn } from "./components/BoardColumn";

export function Board() {
	const selectedBoard = useRecoilValue(selectedDashboard);
	const availableColumns = useRecoilValue(columnsOnSelectedDash(selectedBoard!.id));

	return (
		<BoardContainer>
			{availableColumns?.map((column) => {
				if(column) {
					return (
						<BoardColumn currentColumn={column} key={column?.id} />
					);
				}

			})}
		</BoardContainer>
	);
}
