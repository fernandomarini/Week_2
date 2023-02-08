let myLib2 = require("./contacts");
let myLib = require("./person")




let agenda = new myLib2.Contacts()

console.log(agenda);

let pepe = new myLib.Person("fer","fer",543);
let gat = new myLib.Person("bds","grt",1351);

agenda.contactos = [{pepe}, {gat}];

console.log(agenda);

agenda.printPersons();





