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