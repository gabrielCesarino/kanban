import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999;

	& > div {
		width: 30rem;
		background: ${(props) => props.theme.colors['primary']};
		padding: 2rem;
		border-radius: 6px;
		display: flex;
		flex-direction: column;

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 1.125rem;
			gap: 1rem;
			color: ${(props) => props.theme.colors.text['primary']};
		}

		small {
			margin-top: 1.5rem;
			font-size: 0.875rem;
			color: ${(props) => props.theme.colors.text['small']};
			line-height: 2.3;
		}
	}
`;
