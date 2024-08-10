import { Align, FontWeight, HeadingLevel, ListStyleType, ObjectFit } from '../types/Element';

class Heading {
	type: string;
	headingLevel: HeadingLevel;
	content: string;
	fontFamily: string;
	fontSize: number;
	fontWeight: FontWeight;
	color: string;
	textAlign: Align;
	padding: {
		top: number;
		left: number;
		right: number;
		bottom: number;
	};
	constructor() {
		this.type = 'title';
		this.headingLevel = HeadingLevel.h1;
		this.content = 'I am a new Title Block';
		this.fontFamily = 'Global Font';
		this.fontSize = 38;
		this.fontWeight = FontWeight.bold;
		this.color = '#8b5cf6';
		this.textAlign = Align.left;
		this.padding = {
			top: 10,
			left: 10,
			right: 10,
			bottom: 10
		};
	}
}

class Paragraph {
	type: string;
	content: string;
	fontSize: number;
	color: string;
	fontFamily: string;
	fontWeight: FontWeight;
	textAlign: Align;
	padding: {
		top: number;
		left: number;
		right: number;
		bottom: number;
	};

	constructor() {
		this.type = 'paragraph';
		this.content = 'I am paragraph';
		this.fontFamily = 'Global Font';
		this.fontSize = 16;
		this.color = 'black';
		this.textAlign = Align.left;
		this.fontWeight = FontWeight.normal;
		this.padding = {
			top: 5,
			left: 5,
			right: 5,
			bottom: 5
		};
	}
}

class Button {
	type: string;
	content: string;
	fontFamily: string;
	fontSize: number;
	fontWeight: FontWeight;
	color: string;
	backgroundColor: string;
	borderRadius: number;
	textAlign: Align;
	url: string;
	padding: {
		top: number;
		left: number;
		right: number;
		bottom: number;
	};

	constructor() {
		this.type = 'button';
		this.content = 'Click Me!';
		this.fontFamily = 'Global Font';
		this.fontSize = 16;
		this.fontWeight = FontWeight.normal;
		this.color = 'white';
		this.textAlign = Align.center;
		this.backgroundColor = '#8b5cf6';
		this.borderRadius = 5;
		this.url = '';
		this.padding = {
			top: 5,
			left: 5,
			right: 5,
			bottom: 5
		};
	}
}

class Image {
	type: string;
	content: string;
	fontFamily: string;
	fontSize: number;
	color: string;
	imageUrl: string;
	height: number;
	width: number;
	objectFit: ObjectFit;
	constructor() {
		this.type = 'image';
		this.content = 'I am image';
		this.fontFamily = 'Global Font';
		this.fontSize = 38;
		this.color = 'red';
		this.imageUrl = '';
		this.height = 200;
		this.width = 200;
		this.objectFit = ObjectFit.contain;
	}
}

class Link {
	type: string;
	content: string;
	fontSize: number;
	color: string;
	fontFamily: string;
	fontWeight: FontWeight;
	textAlign: Align;
	url: string;
	padding: {
		top: number;
		left: number;
		right: number;
		bottom: number;
	};
	underline: boolean;

	constructor() {
		this.type = 'link';
		this.content = 'Click me';
		this.fontFamily = 'Global Font';
		this.fontSize = 16;
		this.color = '#3b82f6';
		this.textAlign = Align.left;
		this.fontWeight = FontWeight.normal;
		this.underline = true;
		this.url = '';
		this.padding = {
			top: 5,
			left: 5,
			right: 5,
			bottom: 5
		};
	}
}

class List {
	type: string;
	fontFamily: string;
	fontSize: number;
	fontWeight: FontWeight;
	color: string;
	textAlign: Align;
	listStyleType: ListStyleType;
	listItems: string[];
	listItemSpacing: number;
	padding: {
		top: number;
		left: number;
		right: number;
		bottom: number;
	};

	constructor() {
		this.type = 'list';
		this.fontFamily = 'Global Font';
		this.fontSize = 16;
		this.fontWeight = FontWeight.normal;
		this.color = 'black';
		this.textAlign = Align.left;
		this.listItems = ['List 1', 'List 2'];
		this.listStyleType = ListStyleType.circle;
		this.listItemSpacing = 0;
		this.padding = {
			top: 5,
			left: 5,
			right: 5,
			bottom: 5
		};
	}
}

class Social {
	type: string;
	content: string;
	fontFamily: string;
	fontSize: number;
	color: string;
	socialList: { name: string; url: string; active: boolean }[];
	padding: {
		top: number;
		left: number;
		right: number;
		bottom: number;
	};
	constructor() {
		this.type = 'social';
		this.content = 'I am Social';
		this.fontFamily = 'Global Font';
		this.fontSize = 38;
		this.color = 'red';
		this.socialList = [
			{ name: 'facebook', url: 'www.facebook.com', active: true },
			{ name: 'twitter', url: 'www.x.com', active: true },
			{ name: 'instagram', url: 'www.instagram.com', active: true },
			{ name: 'linkedin', url: 'www.linkedin.com', active: true }
		];
		this.padding = {
			top: 5,
			left: 5,
			right: 5,
			bottom: 5
		};
	}
}

export { Heading, Paragraph, Button, Image, Link, List, Social };
