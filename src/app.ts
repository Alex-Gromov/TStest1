import {Item} from './classes/Item.js';
import { ItemType } from './interfaces/ItemType.js';
import {ULPattern} from './classes/ULPattern.js';

const form = document.querySelector('form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const accountable = document.getElementById('accountable') as HTMLInputElement;
const date = document.getElementById('date') as HTMLInputElement;
const city = document.getElementById('city') as HTMLInputElement;
const category = document.getElementById('category') as HTMLSelectElement;
const details = document.getElementById('details') as HTMLTextAreaElement;

const homeList =  document.querySelector('.homeList') as HTMLUListElement;
const jobList =  document.querySelector('.jobList') as HTMLUListElement;
const extraList =  document.querySelector('.extraList') as HTMLUListElement;

const allItems: object[] = [];

let item: ULPattern;

const renderLocalItems = () => {
	let list = localStorage.getItem('taskList');
	console.log(list)
}

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();
	
	switch(category.value) {
		case "home":
			item = new ULPattern(homeList);
			break;
		case "job":
			item = new ULPattern(jobList);
			break;
		case "extra":
			item = new ULPattern(extraList);
			break;
			default:
			item = new ULPattern(extraList);
	}

	let doc: ItemType;

	doc = new Item(
		title.value,
		accountable.value,
		date.value,
		{
			city: city.value,
			category: category.value,
			detailsBody: details.value
		}
	)

	allItems.push(doc);
	localStorage.setItem('taskList', JSON.stringify(allItems));

	renderLocalItems()

	item.render(doc, category.value, accountable.value);
})

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

const greeting = (func: (s: string) => void) => {
	func('hey there')
}

const sayHi = (s: string) => {
	console.log(s);
} 

greeting(sayHi);
///////////////////////////////////////////////////////

const giveResult = <T>(arr: T[]): T => {
	return arr[1];
}

const s = giveResult([4,13,8]);
console.log(s);
