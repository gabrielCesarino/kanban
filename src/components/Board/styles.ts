import styled from 'styled-components';

export const BoardContainer = styled.div`
	display: flex;
	padding: 1.5rem;
`;

export const BoardCollumn = styled.div`
	min-width: 17.5rem;

	& + div {
		margin-left: 1rem;
	}

	& > small {
			font-size: 0.75rem;
			font-weight: bold;
			text-transform: uppercase;
			letter-spacing: 2.4px;
			color: var(--gray-400);
			display: flex;
			align-items: center;
			gap: 0.5rem;

			&::before{
				content: '\A';
				color: transparent;
				width:1rem;
    		height:1rem;
    		border-radius:50%;
				display: inline-block;
				margin: 0;
				background: var(--purple-700);
			}
	}
`;

export const Task = styled.div`
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