import styled from 'styled-components';

export const AsideContainer = styled.aside`
	background: var(--white);
	display: flex;
	flex-direction: column;
	max-width: 18.75rem;
	height: 100vh;
	align-items: flex-start;
	padding: 2rem;
	border-right: 1px solid rgba(100, 100, 100, 0.2);

	& > img {
		width: 10rem;
	}
`;

export const InteractionsContainer = styled.div`
	margin-top: 3.375rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	small {
		font-size: 0.75rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 2.4px;
		color: var(--gray-400);
	}
`;

export const BoardsList = styled.div`
	margin-top: 1rem;
`;

export const Board = styled.div``;


