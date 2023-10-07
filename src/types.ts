export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Column = {
  __typename?: 'Column';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ColumnFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type ColumnInput = {
  name: Scalars['String']['input'];
};

export type Dashboard = {
  __typename?: 'Dashboard';
  Tasks?: Maybe<Array<Maybe<Task>>>;
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type DashboardFilter = {
  code?: InputMaybe<Scalars['String']['input']>;
  code_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type DashboardInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createColumn?: Maybe<Column>;
  createDashboard?: Maybe<Dashboard>;
  createManyColumn?: Maybe<Array<Maybe<Column>>>;
  createManyDashboard?: Maybe<Array<Maybe<Dashboard>>>;
  createManySubstask?: Maybe<Array<Maybe<Substask>>>;
  createManyTask?: Maybe<Array<Maybe<Task>>>;
  createSubstask?: Maybe<Substask>;
  createTask?: Maybe<Task>;
  removeColumn?: Maybe<Column>;
  removeDashboard?: Maybe<Dashboard>;
  removeSubstask?: Maybe<Substask>;
  removeTask?: Maybe<Task>;
  updateColumn?: Maybe<Column>;
  updateDashboard?: Maybe<Dashboard>;
  updateSubstask?: Maybe<Substask>;
  updateTask?: Maybe<Task>;
};


export type MutationCreateColumnArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateDashboardArgs = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateManyColumnArgs = {
  data?: InputMaybe<Array<InputMaybe<ColumnInput>>>;
};


export type MutationCreateManyDashboardArgs = {
  data?: InputMaybe<Array<InputMaybe<DashboardInput>>>;
};


export type MutationCreateManySubstaskArgs = {
  data?: InputMaybe<Array<InputMaybe<SubstaskInput>>>;
};


export type MutationCreateManyTaskArgs = {
  data?: InputMaybe<Array<InputMaybe<TaskInput>>>;
};


export type MutationCreateSubstaskArgs = {
  isFinished: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  task_id: Scalars['ID']['input'];
};


export type MutationCreateTaskArgs = {
  dashboard_id: Scalars['ID']['input'];
  endAt?: InputMaybe<Scalars['Date']['input']>;
  startAt: Scalars['Date']['input'];
  status: Scalars['String']['input'];
};


export type MutationRemoveColumnArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveDashboardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSubstaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateColumnArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDashboardArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateSubstaskArgs = {
  id: Scalars['ID']['input'];
  isFinished?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  task_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateTaskArgs = {
  dashboard_id?: InputMaybe<Scalars['ID']['input']>;
  endAt?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  startAt?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  Column?: Maybe<Column>;
  Dashboard?: Maybe<Dashboard>;
  Substask?: Maybe<Substask>;
  Task?: Maybe<Task>;
  _allColumnsMeta?: Maybe<ListMetadata>;
  _allDashboardsMeta?: Maybe<ListMetadata>;
  _allSubstasksMeta?: Maybe<ListMetadata>;
  _allTasksMeta?: Maybe<ListMetadata>;
  allColumns?: Maybe<Array<Maybe<Column>>>;
  allDashboards?: Maybe<Array<Maybe<Dashboard>>>;
  allSubstasks?: Maybe<Array<Maybe<Substask>>>;
  allTasks?: Maybe<Array<Maybe<Task>>>;
};


export type QueryColumnArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDashboardArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySubstaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllColumnsMetaArgs = {
  filter?: InputMaybe<ColumnFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllDashboardsMetaArgs = {
  filter?: InputMaybe<DashboardFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllSubstasksMetaArgs = {
  filter?: InputMaybe<SubstaskFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllTasksMetaArgs = {
  filter?: InputMaybe<TaskFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllColumnsArgs = {
  filter?: InputMaybe<ColumnFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllDashboardsArgs = {
  filter?: InputMaybe<DashboardFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllSubstasksArgs = {
  filter?: InputMaybe<SubstaskFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type Substask = {
  __typename?: 'Substask';
  Task?: Maybe<Task>;
  id: Scalars['ID']['output'];
  isFinished: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  task_id: Scalars['ID']['output'];
};

export type SubstaskFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isFinished?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  task_id?: InputMaybe<Scalars['ID']['input']>;
  task_id_neq?: InputMaybe<Scalars['ID']['input']>;
};

export type SubstaskInput = {
  isFinished: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  task_id: Scalars['ID']['input'];
};

export type Task = {
  __typename?: 'Task';
  Dashboard?: Maybe<Dashboard>;
  Substasks?: Maybe<Array<Maybe<Substask>>>;
  dashboard_id: Scalars['ID']['output'];
  endAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  startAt: Scalars['Date']['output'];
  status: Scalars['String']['output'];
};

export type TaskFilter = {
  dashboard_id?: InputMaybe<Scalars['ID']['input']>;
  dashboard_id_neq?: InputMaybe<Scalars['ID']['input']>;
  endAt?: InputMaybe<Scalars['Date']['input']>;
  endAt_gt?: InputMaybe<Scalars['Date']['input']>;
  endAt_gte?: InputMaybe<Scalars['Date']['input']>;
  endAt_lt?: InputMaybe<Scalars['Date']['input']>;
  endAt_lte?: InputMaybe<Scalars['Date']['input']>;
  endAt_neq?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['Date']['input']>;
  startAt_gt?: InputMaybe<Scalars['Date']['input']>;
  startAt_gte?: InputMaybe<Scalars['Date']['input']>;
  startAt_lt?: InputMaybe<Scalars['Date']['input']>;
  startAt_lte?: InputMaybe<Scalars['Date']['input']>;
  startAt_neq?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_neq?: InputMaybe<Scalars['String']['input']>;
};

export type TaskInput = {
  dashboard_id: Scalars['ID']['input'];
  endAt?: InputMaybe<Scalars['Date']['input']>;
  startAt: Scalars['Date']['input'];
  status: Scalars['String']['input'];
};
