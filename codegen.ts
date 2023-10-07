import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:4000/",
	generates: {
		"src/types.ts": { plugins: ["typescript"] },
		"./src": {
			// comment out the next line and you will see proper error messages

			documents: [
				// ! NOTE: files with extension ".ts" or ".tsx" are treated as "query builders",
				// ! and as such are not included in the generated code (generated types must be based on static queries)
				// * standard "queries.ts", "mutations.ts", "subscriptions.ts" files
				// // 'src/**/(queries|mutations).graphql',
				// * non-standard "/queries/SOME_QUERY_NAME.ts" files
				// ? note: this picks both queries.ts and queries/SOME_QUERY_NAME.ts for some reason, so we leave only this one
				// ? weird enough, if we leave both (queries.ts and queries/SOMETHING.ts), it duplicates the generated types and causes errors
				"src/**/(queries|mutations).graphql",

				// ! required because of apollo's bug with useSubscription hook (not implementing the TypedDocument API)
				// * remember to useSubscription like this:
				// * useSubscription<t.generatedSubscription>(ACTUAL_SUBSCRIPTION_FROM_TS_FILE)
				"src/**/subscriptions.(ts|tsx)",
			],
			preset: "near-operation-file",
			presetConfig: {
				extension: ".codegen.ts",
				baseTypesPath: "types.ts"
			},
			plugins: ["typescript-operations", "typed-document-node"],
			config: {
				addOperationExport: true,
				typesPrefix: "I",
				enumPrefix: false,
				namingConvention: "change-case-all#pascalCase",
			},
		},
	},
};

export default config;
