import { v4 as uuidv4 } from 'uuid';

export class NodeInstance {
	uuid: string;
	title: string;

	constructor(title: string) {
		this.uuid = 'node-' + uuidv4();
		this.title = title;
	}
}
