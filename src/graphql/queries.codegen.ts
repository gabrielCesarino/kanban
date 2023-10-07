import * as Types from "../types";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type IDashboardsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IDashboardsQuery = { __typename?: "Query", allDashboards?: Array<{ __typename?: "Dashboard", id: string, name: string, code: string } | null> | null };

export declare const dashboards: import("graphql").DocumentNode;

export const DashboardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dashboards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDashboards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<IDashboardsQuery, IDashboardsQueryVariables>;