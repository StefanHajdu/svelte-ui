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

abstract class Node {
	abstract getState(): string;
}

class LoadNode extends Node {
	uuid: string;
	title: string;
	nodeType: string = 'load';

	constructor(title: string) {
		super();
		this.uuid = 'node-' + uuidv4();
		this.title = title;
	}

	getState(): string {
		return this.title;
	}
}

class FilterNode extends Node {
	uuid: string;
	title: string;
	nodeType: string = 'filter';

	constructor(title: string) {
		super();
		this.uuid = 'node-' + uuidv4();
		this.title = title;
	}

	getState(): string {
		return this.title;
	}
}
