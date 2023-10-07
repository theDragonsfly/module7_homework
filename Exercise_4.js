let consumption = 0;
function consumptionCounter(power, isPlugIn) {
    if (isPlugIn) consumption += power;
    else consumption -= power;
}

function ElectricalAppliance () {
    this.powerConsumption = 0;
}
ElectricalAppliance.prototype.plugIn = function(power) {
    this.turnOn = true;
    this.powerConsumption = power;
    consumptionCounter(power, true);
}
ElectricalAppliance.prototype.plugOut = function() {
    this.turnOn = false;
    consumptionCounter(this.powerConsumption, false);
    this.powerConsumption = 0;
}

function Notebook (color, screenSize) {
    this.color = color;
    this.screenSize = screen.size;
}
Notebook.prototype = new ElectricalAppliance();
Notebook.prototype.addNumbers = function(a = 0, b = 0) {
    let summa = 0;
    for (let i in arguments){
        summa += arguments[i];
    }
    console.log(`Summa is ${summa}`);
}

function EBook(color, memory = 4, numberOfBooks = 0) {
    this.color = color;
    this.memory = memory;
    this.numberOfBooks = numberOfBooks;
}
EBook.prototype = new ElectricalAppliance();
EBook.prototype.setNumberOfBooks = function(numberOfBooks) {
    this.numberOfBooks = numberOfBooks;
}
EBook.prototype.showNumberOfBooks = function() {
    console.log('Here are ' + this.numberOfBooks + ' books');
}

let notebook = new Notebook('black', 15.6);
let ebook = new EBook('white', 8);
notebook.plugIn(60);
notebook.addNumbers(16, 36, 96);
console.log('Total consumption is ' + consumption);

ebook.plugIn(6);
ebook.setNumberOfBooks(60);
ebook.showNumberOfBooks();
console.log('Total consumption is ' + consumption);

notebook.plugOut();
ebook.plugOut();
console.log('Total consumption is ' + consumption);
