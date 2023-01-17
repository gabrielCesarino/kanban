import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5rem;
	padding-right: 2rem;
	background-color: var(--white);
	border-bottom: 1px solid rgba(100, 100, 100, 0.2);

	& > div {
		display: flex;
		align-items: center;
		height: 100%;
	}

	div > strong {
		color: var(--gray-800);
		font-size: 1.5rem;
		padding: 2rem;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	min-width: 16rem;
	border-right: 1px solid rgba(100, 100, 100, 0.2);
	padding-left: 2rem;
	height: 100%;
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
		font-weight: bold;

		&:hover{
			cursor: pointer;
		}
	}

	& > img:hover{
		cursor: pointer;
	}

`;