import * as Types from '../types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type IDashboardsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IDashboardsQuery = { __typename?: 'Query', allDashboards?: Array<{ __typename?: 'Dashboard', id: string, name: string, code: string } | null> | null };

export type IGetColumnsForSelectedDashQueryVariables = Types.Exact<{
  dashboardID: Types.Scalars['ID']['input'];
}>;


export type IGetColumnsForSelectedDashQuery = { __typename?: 'Query', allColumns?: Array<{ __typename?: 'Column', id: string, name: string } | null> | null };

export type IGetTasksForSelectedDashQueryVariables = Types.Exact<{
  dashboardID: Types.Scalars['ID']['input'];
}>;


export type IGetTasksForSelectedDashQuery = { __typename?: 'Query', allTasks?: Array<{ __typename?: 'Task', id: string, name: string, status: string, description: string, dashboard_id: string } | null> | null };

export declare const dashboards: import("graphql").DocumentNode;
export declare const getColumnsForSelectedDash: import("graphql").DocumentNode;
export declare const getTasksForSelectedDash: import("graphql").DocumentNode;

export const DashboardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dashboards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDashboards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<IDashboardsQuery, IDashboardsQueryVariables>;
export const GetColumnsForSelectedDashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getColumnsForSelectedDash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dashboardID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allColumns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"dashboard_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dashboardID"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<IGetColumnsForSelectedDashQuery, IGetColumnsForSelectedDashQueryVariables>;
export const GetTasksForSelectedDashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTasksForSelectedDash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dashboardID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"dashboard_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dashboardID"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dashboard_id"}}]}}]}}]} as unknown as DocumentNode<IGetTasksForSelectedDashQuery, IGetTasksForSelectedDashQueryVariables>;