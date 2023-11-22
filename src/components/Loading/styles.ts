import styled from "styled-components";

export const LoadingContainer = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	background-color: ${({theme}) => theme.colors.purple};
	opacity: 0.6;
`;