import styled from 'styled-components';

export const AsideContainer = styled.aside`
	background: var(--white);
	display: flex;
	flex-direction: column;
	min-width: 16rem;
	height: calc(100vh - 5rem);
	align-items: flex-start;
	border-right: 1px solid rgba(100, 100, 100, 0.2);
	padding: 2.5rem 0;

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
			color: var(--gray-400);
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
	color: var(--gray-400);
	font-weight: bold;
	padding: 1rem 0;
	display: flex;
	align-items: center;
	padding-left: 2rem;

	&.createButton {
		color: var(--purple-700);

		> img {
			color: var(--purple-700);
		}
	}

	& > span {
		margin-left: 0.5rem;
	}

	&:hover {
		cursor: pointer;
	}

	&.activeBoard {
		background: var(--purple-700);
		border-radius: 0 40px 40px 0;
		color: var(--white);

		> img {
			fill: var(--white)
		}
	}
`;

export const ToggleThemeContainer = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		background: var(--gray-100);
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
		background: var(--purple-700);
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
		background: var(--gray-500);
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
		color: var(--gray-400);
	}

	&:hover{
		cursor: pointer;

		> small {
			color: var(--purple-300);
		}
	}
`;

export const ShowSidebarContainer = styled.div`
	position: absolute;
	bottom: 10rem;

	button {
		background: var(--purple-700);
		border: 0;
		border-radius: 0 40px 40px 0;
		padding: 0.75rem;
		transition: background-color 0.2s;

		& > img {
			margin-right: 0.25rem;
		}

		&:hover {
			cursor: pointer;
			background-color: var(--purple-300);
		}
	}
`;

