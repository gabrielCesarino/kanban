import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 1rem;
	}

	body, input, textarea, button {
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

`;