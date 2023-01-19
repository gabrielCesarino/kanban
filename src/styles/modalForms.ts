import styled from 'styled-components';

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
		height: 2.5rem;
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