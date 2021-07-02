var Item = /** @class */ (function () {
    function Item(title, accountable, date, details) {
        this.title = title;
        this.accountable = accountable;
        this.date = date;
        this.details = details;
    }
    Item.prototype.msg = function () {
        var snippet = this.details.detailsBody.split(' ').slice(0, 10).join(' ') + '....';
        return this.title + ". Expires: " + this.date;
    };
    return Item;
}());
export { Item };
