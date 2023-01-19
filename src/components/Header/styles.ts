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

		&:hover{
			cursor: pointer;
		}
	}

	& > img:hover{
		cursor: pointer;
	}

`;

export const FormContainer = styled.form`
	& > button {
		width: 100%;
		margin-top: 1rem;
		background: ${(props) => props.theme.colors['purple']};
		color: ${(props) => props.theme.colors['white']};
		border: 0;
		border-radius: 20px;
		padding: 1rem;

		font-weight: bold;

		&:hover{
			cursor: pointer;
		}
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;

	small {
		font-weight: bold;
	}

	input, textarea, select {
		border-radius: 4px;
		border: 1px solid rgba(228, 235, 250, 0.75);
		background: transparent;
		outline: none;
		color: ${(props) => props.theme.colors.text['primary']};

		&:focus-within {
			border: 1px solid ${(props) => props.theme.colors['purple']};;
		}
	}

	input, select {
		height: 2rem;
		padding: 0.25rem;
	}

	& > textarea {
		resize: none;
		height: 4rem;
		padding: 0.5rem;
	}

	div {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		input {
			width: 100%;
		}

		+ div {
			margin-top: 0.5rem;
		}
	}
`;

export const ButtonAddSubtask = styled.button`
	margin-top: 0.5rem;
	background: '${(props) => props.theme.colors['background']}';
	color: ${(props) => props.theme.colors['purple']};
	border: 0;
	border-radius: 20px;
	padding: 1rem;

	font-weight: bold;

	&:hover{
			cursor: pointer;
		}
`;