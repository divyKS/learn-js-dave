// creating a class and then exporting it
export default class User{
    constructor(email, name){
        this._id = email;
        this._name = name;
    }
    greeting(){
        return `Mera naam ${this._name} hai!`
    }
}