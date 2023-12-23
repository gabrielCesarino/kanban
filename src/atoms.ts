import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { DashboardsDocument, GetColumnsForSelectedDashDocument, GetTasksForSelectedDashDocument, IDashboardsQuery, IGetColumnsForSelectedDashQuery, IGetTasksForSelectedDashQuery } from "./graphql/queries.codegen";
import getClientInstance from "./apolloClient";
import { Dashboard } from "./types";


export async function getDashboards() {
	const client = getClientInstance();

	const { data } = await client.query({
		query: DashboardsDocument
	});

	return data.allDashboards;
}

export const dashboards = atom<IDashboardsQuery["allDashboards"]>({
	key: "dashboards",
	effects: [
		({setSelf, trigger}) => {
			const loadDashboards = async() => {
				const dashboards = await getDashboards();
				setSelf(dashboards);
			};

			if(trigger === "get"){
				loadDashboards();
			}
		}
	]
});


export const selectedDashboard = atom<Dashboard | undefined | null>({
	key: "selectedDashboard",
	default: selector({
		key: "getSelectedDashboard",
		get: ({get}) => {
			const availableDashboards = get(dashboards);
			return availableDashboards?.[0];
		}
	})
});

export const columnsOnSelectedDash = atomFamily<IGetColumnsForSelectedDashQuery["allColumns"], string>({
	key: "columnsOnSelectedDash",
	default: [],
	effects: (dashboardID) => [
		({setSelf, trigger}) => {
			const loadColumns = async() => {
				const client = getClientInstance();
				const {data} = await client.query(({
					query: GetColumnsForSelectedDashDocument,
					variables: {
						dashboardID,
					},
				}));
				setSelf(data.allColumns);
			};

			if(trigger === "get") {
				loadColumns();
			}
		}
	]
});

export const tasksOnSelectedDash = atomFamily<IGetTasksForSelectedDashQuery["allTasks"], string>({
	key: "tasksOnSelectedDash",
	effects: (dashboardID) => [
		({setSelf, trigger}) => {
			const loadColumns = async() => {
				const client = getClientInstance();
				const { data } = await client.query(({
					query: GetTasksForSelectedDashDocument,
					variables: {
						dashboardID,
					},
				}));
				setSelf(data.allTasks);
			};

			if(trigger === "get") {
				loadColumns();
			}
		}
	]
});

export const tasksOnCorrelatedColumn = selectorFamily({
	key: "tasksOnCorrelatedColumn",
	get: (status: string) => ({get}) => {
		const currentSelectedDashboard = get(selectedDashboard);
		const tasks = get(tasksOnSelectedDash(currentSelectedDashboard!.id));

		const availableTasks = tasks?.filter((task) => task?.status === status);

		return availableTasks;
	},
});
