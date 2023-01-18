import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.05);

	& > div {
		max-width: 30rem;
		background: var(--white);
		padding: 2rem;
		border-radius: 6px;
		display: flex;
		flex-direction: column;

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 1.125rem;
			gap: 1rem;
		}

		& > small {
			margin-top: 1.5rem;
			font-size: 0.875rem;
			color: var(--gray-400);
			line-height: 2.3;
		}
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
	}
`;