import { createServer } from 'miragejs';
import data from './utils/data.json';

export default function () {
	createServer({
		routes() {
			this.get('/boards', () => data);
		},
	});
}