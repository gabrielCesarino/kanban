import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5rem;
	padding-right: 2rem;
	background-color: ${(props) => props.theme.colors['primary']};
	border-bottom: 1px solid rgba(168, 164, 255, 0.25);

	& > div {
		display: flex;
		align-items: center;
		height: 100%;
	}

	div > strong {
		color: ${(props) => props.theme.colors.text['primary']};
		font-size: 1.5rem;
		padding: 2rem;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	min-width: 16rem;
	border-right: 1px solid rgba(168, 164, 255, 0.25);
	padding-left: 2rem;
	height: 100%;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 1.5rem;
	align-items: center;

	& > button {
		background: ${(props) => props.theme.colors['purple']};
		color: ${(props) => props.theme.colors['white']};
		border: 0;
		border-radius: 24px;
		padding: 0.75rem 1rem;
		font-weight: bold;

		&:disabled {
			background: ${(props) => props.theme.colors['purple-hover']};

			&:hover{
				cursor: initial;
			}
		}

		&:hover{
			cursor: pointer;
		}
	}

	& > img:hover{
		cursor: pointer;
	}

`;
