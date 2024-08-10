import { Button, Heading, Image, Link, List, Paragraph, Social } from './Elements';
import type { BlockType } from '../types/BlockType';

export const createElement = (blockType: BlockType) => {
	switch (blockType) {
		case 'Title':
			return new Heading();
		case 'Paragraph':
			return new Paragraph();
		case 'Image':
			return new Image();
		case 'Button':
			return new Button();
		case 'Link':
			return new Link();
		case 'List':
			return new List();
		case 'Social':
			return new Social();
		default:
			return {};
	}
};
