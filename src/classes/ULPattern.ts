import { ItemType } from "../interfaces/ItemType";


export class ULPattern {
	constructor(
		readonly container: HTMLUListElement
	){} 

	render(doc: ItemType, category: string, accountable: string) {
		const li = document.createElement('li');

		const h5 = document.createElement('h5');
		h5.innerText = accountable;
		li.append(h5);

		const par = document.createElement('p');
		par.innerText = doc.msg();
		li.append(par);

		this.container.append(li);
	}
}