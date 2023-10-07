import { atom, selector } from "recoil";
import { DashboardsDocument, IDashboardsQuery } from "./graphql/queries.codegen";
import getClientInstance from "./apolloClient";
import { Dashboard } from "./types";

const client = getClientInstance();

export const dashboards = atom<IDashboardsQuery["allDashboards"]>({
	key: "dashboards",
	effects: [
		({setSelf, trigger}) => {
			const loadDashboards = async() => {
				const { data } =  await client.query({
					query: DashboardsDocument
				});
				setSelf(data.allDashboards);
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

