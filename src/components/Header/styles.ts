import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	background-color: var(--white);
	border-bottom: 1px solid rgba(100, 100, 100, 0.2);

	& > strong {
		color: var(--gray-800);
		font-size: 1.5rem;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 1.5rem;
	align-items: center;

	& > button {
		background: var(--purple-700);
		color: var(--white);
		border: 0;
		border-radius: 24px;
		padding: 0.75rem 1rem;

		&:hover{
			cursor: pointer;
		}
	}

	& > img:hover{
		cursor: pointer;
	}

`;