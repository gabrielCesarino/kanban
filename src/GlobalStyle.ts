import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root{
		--white: #ffffff;
		--gray-100: #f4f7fd;
		--gray-300: #e4ebfa;
		--gray-400: #828fa3;
		--gray-500: #3e3f4e;
		--gray-600: #2b2c37;
		--gray-700: #20212c;
		--gray-800: #000112;
		--purple-300: #a8a4ff;
		--purple-700: #635fc7;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 1rem;
	}

	body {
		background-color: ${(props) => props.theme.colors['background']};
	}

	body, input, textarea, button {
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

`;

import styled from 'styled-components';

export const AppContainer = styled.div`
	main {
		display: flex;
	};
`;