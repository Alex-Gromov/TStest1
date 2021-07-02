import { Item } from './classes/Item.js';
import { ULPattern } from './classes/ULPattern.js';
var form = document.querySelector('form');
var title = document.getElementById('title');
var accountable = document.getElementById('accountable');
var date = document.getElementById('date');
var city = document.getElementById('city');
var category = document.getElementById('category');
var details = document.getElementById('details');
var homeList = document.querySelector('.homeList');
var jobList = document.querySelector('.jobList');
var extraList = document.querySelector('.extraList');
var allItems = [];
var item;
var renderLocalItems = function () {
    var list = localStorage.getItem('taskList');
    console.log(list);
};
form.addEventListener('submit', function (e) {
    e.preventDefault();
    switch (category.value) {
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
    var doc;
    doc = new Item(title.value, accountable.value, date.value, {
        city: city.value,
        category: category.value,
        detailsBody: details.value
    });
    allItems.push(doc);
    localStorage.setItem('taskList', JSON.stringify(allItems));
    renderLocalItems();
    item.render(doc, category.value, accountable.value);
});
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
var greeting = function (func) {
    func('hey there');
};
var sayHi = function (s) {
    console.log(s);
};
greeting(sayHi);
///////////////////////////////////////////////////////
var giveResult = function (arr) {
    return arr[1];
};
var s = giveResult([4, 13, 8]);
console.log(s);
