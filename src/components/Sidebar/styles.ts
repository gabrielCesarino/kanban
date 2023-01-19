import styled from 'styled-components';

export const AsideContainer = styled.aside`
	background: ${(props) => props.theme.colors['primary']};
	display: flex;
	flex-direction: column;
	min-width: 16rem;
	height: calc(100vh - 5rem);
	align-items: flex-start;
	border-right: 1px solid rgba(168, 164, 255, 0.25);
	border-radius: 0 0 20px 20px;
	padding: 1.5rem 0;

	& > img {
		width: 12rem;
		padding: 0 2rem;
	}

	&.sidebarHide {
		min-width: 0;
	}
`;

export const InteractionsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > div {

		small {
			padding-left: 2rem;
			font-size: 0.75rem;
			font-weight: bold;
			text-transform: uppercase;
			letter-spacing: 2.4px;
			color: ${(props) => props.theme.colors.text['small']};
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 1rem;
		padding: 1rem;
	}
`;

export const BoardsList = styled.div`
	margin-top: 1rem;
	padding-right: 2rem;
`;

export const Board = styled.div`
	color: ${(props) => props.theme.colors.text['secondary']};
	font-weight: bold;
	padding: 1rem 0;
	display: flex;
	align-items: center;
	padding-left: 2rem;

	&.createButton {
		color: ${(props) => props.theme.colors['purple']};
	}

	& > span {
		margin-left: 0.5rem;
	}

	&:hover {
		cursor: pointer;
	}

	&.activeBoard {
		background: ${(props) => props.theme.colors['purple']};
		border-radius: 0 40px 40px 0;
		color: ${(props) => props.theme.colors['white']};
	}
`;

export const ToggleThemeContainer = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		background: ${(props) => props.theme.colors['background']};
		padding: 1rem;
		width: 100%;
		border-radius: 8px;
`;

export const ToggleContainer = styled.div`
	input[type=checkbox]{
		display: none;
	}

	label {
		cursor: pointer;
		text-indent: -9999px;
		width: 2.5rem;
		height: 1.25rem;
		background: ${(props) => props.theme.colors['purple']};
		display: block;
		border-radius: 100px;
		position: relative;
	}

	label:after {
		content: '';
		position: absolute;
		top: 0.25rem;
		left: 0.25rem;
		width: 0.75rem;
		height: 0.75rem;
		background: #fff;
		border-radius: 90px;
		transition: 0.3s;
	}

	input:checked + label {
		background: #3e3f4e;
	}

	input:checked + label:after {
		left: calc(100% - 0.25rem);
		transform: translateX(-100%);
	}

	label:active:after {
		width: 1.5rem;
	}
`;

export const HideContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 1rem;
	transition: all 0.2s;

	& > small {
		font-weight: bold;
		color: ${(props) => props.theme.colors.text['small']}
	}

	&:hover{
		cursor: pointer;

		> small {
			color: ${(props) => props.theme.colors['purple-hover']};
		}
	}
`;

export const ShowSidebarContainer = styled.div`
	position: absolute;
	bottom: 3rem;

	button {
		background: ${(props) => props.theme.colors['purple']};
		border: 0;
		border-radius: 0 40px 40px 0;
		padding: 0.75rem;
		transition: background-color 0.2s;

		& > img {
			margin-right: 0.25rem;
		}

		&:hover {
			cursor: pointer;
			background: ${(props) => props.theme.colors['purple-hover']};
		}
	}
`;

