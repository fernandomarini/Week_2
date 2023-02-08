let myLib = require("./person")


class Contacts{

    constructor(){
        this.contactos = [];
    };

    printPersons(){
        for ( let i = 0 ; i < this.contactos.length ; i++ ) {
            console.log(this.contactos[i])
        };
    };
};






module.exports = {Contacts}