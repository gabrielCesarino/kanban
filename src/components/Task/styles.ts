import styled from 'styled-components';

export const TaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	border-radius: 8px;
	background: var(--white);
	line-height: 1.6;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
	margin-top: 1rem;

	& > span {
		font-size: 0.75rem;
		font-weight: bold;
		color: var(--gray-400);
	}

	&:hover{
		cursor: pointer;
	}
`;


export const SubtasksContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.5rem;
	flex: 1;

	& > span {
		font-size: 0.75rem;
		font-weight: bold;
		color: var(--gray-400);
	}

	ul {
		margin-top: 1.5rem;
	}
`;

export const Subtask = styled.div`
	display: flex;
	gap: 1rem;
	background: var(--gray-300);
	padding: 0.75rem;
	border-radius: 4px;

	input[type=checkbox]:checked + span {
		text-decoration-line: line-through;
		color: var(--gray-400);
	}

	& > span {
		color: var(--gray-800);
		font-size: 0.75rem;
		font-weight: bold;
	}

	& + div {
		margin-top: 1rem;
	}
`;

export const StatusContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.5rem;

	& > span {
		font-size: 0.75rem;
		font-weight: bold;
		color: var(--gray-400);
	}

	& > select {
		margin-top: 0.25rem;
		padding: 1rem;
		border-radius: 4px;
		border: 1px solid var(--gray-300);

		font-size: 0.875rem;

		&:focus-within{
			outline: 1px solid var(--gray-400);
		}
	}
`;
