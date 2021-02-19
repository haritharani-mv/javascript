class Person{
    name= 'max';
    constructor(){
        this.age = 30;
    
    }
    greet(){
     console.log('hi i am  ' + this.name + ' my age is '+ this.age);
    }
}
const person = new Person();
person.greet();