import styled from 'styled-components';

export const BoardContainer = styled.div`
	display: flex;
	padding: 1.5rem;
`;

export const BoardCollumn = styled.div`
	width: 17.5rem;

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
