import styled from 'styled-components';

export const TaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	border-radius: 8px;
	background: ${(props) => props.theme.colors['primary']};
	line-height: 1.6;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
	margin-top: 1rem;

	& > strong {
		color: ${(props) => props.theme.colors.text['primary']};
	}

	& > span {
		font-size: 0.75rem;
		font-weight: bold;
		color: ${(props) => props.theme.colors.text['small']};
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
		color: ${(props) => props.theme.colors.text['small']}
	}

	ul {
		margin-top: 1.5rem;
	}
`;

export const Subtask = styled.div`
	display: flex;
	gap: 1rem;
	background: ${(props) => props.theme.colors['background']};
	padding: 0.75rem;
	border-radius: 4px;

	input[type=checkbox]:checked + span {
		text-decoration-line: line-through;
		color: ${(props) => props.theme.colors.text['small']};
	}

	& > span {
		color: ${(props) => props.theme.colors.text['primary']};
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
		background: ${(props) => props.theme.colors['primary']};
		border: 1px solid ${(props) => props.theme.colors['purple-hover']};
		font-size: 0.875rem;
		color: ${(props) => props.theme.colors.text['primary']};

		&:focus-within{
			outline: 1px solid ${(props) => props.theme.colors['purple']};
		}
	}
`;
