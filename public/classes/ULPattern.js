var ULPattern = /** @class */ (function () {
    function ULPattern(container) {
        this.container = container;
    }
    ULPattern.prototype.render = function (doc, category, accountable) {
        var li = document.createElement('li');
        var h5 = document.createElement('h5');
        h5.innerText = accountable;
        li.append(h5);
        var par = document.createElement('p');
        par.innerText = doc.msg();
        li.append(par);
        this.container.append(li);
    };
    return ULPattern;
}());
export { ULPattern };
