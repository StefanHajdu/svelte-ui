import { v4 as uuidv4 } from 'uuid';

export function nodeFactoryMethod(title: string): Node {
	if (title.toLowerCase() === 'load') {
		return new LoadNode(title);
	} else if (title.toLowerCase() === 'filter') {
		return new FilterNode(title);
	} else {
		return new LoadNode(title);
	}
}

export abstract class Node {
	uuid: string;

	constructor() {
		this.uuid = 'node-' + uuidv4();
	}

	abstract getState(): string;
}

class LoadNode extends Node {
	title: string;
	nodeType: string = 'load';

	constructor(title: string) {
		super();
		this.title = title;
	}

	getState(): string {
		return this.title;
	}
}

class FilterNode extends Node {
	title: string;
	nodeType: string = 'filter';

	constructor(title: string) {
		super();
		this.title = title;
	}

	getState(): string {
		return this.title;
	}
}
