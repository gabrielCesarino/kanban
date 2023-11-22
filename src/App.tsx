import { Suspense, useState } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { darkTheme } from "./themes/dark";
import { GlobalStyle, AppContainer } from "./GlobalStyle";
import { ApolloProvider } from "@apollo/client";
import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import getClientInstance from "./apolloClient";
import { Loading } from "./components/Loading";

export function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	function selectTheme() {
		setIsDarkTheme(!isDarkTheme);
	}

	const client = getClientInstance();

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
				<RecoilRoot>
					<Suspense fallback={<Loading />}>
						<AppContainer>
							<Header
								isDarkTheme={isDarkTheme}
							/>
							<main>
								<Sidebar
									checked={isDarkTheme}
									handleSelectTheme={selectTheme}
								/>
								<Board
								/>
							</main>
						</AppContainer>
					</Suspense>
				</RecoilRoot>
				<GlobalStyle />
			</ThemeProvider>
		</ApolloProvider>
	);
}

