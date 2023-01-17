import { BoardContainer, BoardCollumn, Task } from './styles';

export function Board() {
	return(
		<BoardContainer>
			<BoardCollumn>
				<small>TODO (4)</small>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
			</BoardCollumn>
			<BoardCollumn>
				<small>TODO (4)</small>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
			</BoardCollumn>
			<BoardCollumn>
				<small>TODO (4)</small>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
				<Task>
					<strong>Build UI for onboarding flow</strong>
					<span>0 of 3 subtasks</span>
				</Task>
			</BoardCollumn>
		</BoardContainer>
	);
}