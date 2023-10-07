import { ApolloClient, InMemoryCache } from "@apollo/client";

function getClientInstance() {
	const client = new ApolloClient({
		uri: "http://localhost:4000",
		cache: new InMemoryCache(),
	});

	return client;
}

export default getClientInstance;

