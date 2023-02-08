class Contacts{

    constructor(){
        this.person = [];


    };

    printPersons(){
        for ( let i = 0 ; i < this.person.length ; i++ ) {
            console.log(this.person[i])
        };
    };

};




module.exports = {Contacts}