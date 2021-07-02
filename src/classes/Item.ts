import { Info } from "../interfaces/Info";
import { ItemType } from "../interfaces/ItemType";

export class Item implements ItemType {
	constructor(
		public title: string,
		readonly accountable: string,
		readonly date: string, 
		private details: Info
	){}

	msg() {
		const snippet = this.details.detailsBody.split(' ').slice(0,10).join(' ') + '....';
		return `${this.title}. Expires: ${this.date}`;
	}
}