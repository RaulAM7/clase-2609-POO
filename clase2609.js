/*
class Teacher {
    constructor (name, lastName) {
        
        this.name = name
        this.lastName = lastName
        
    }
    
}

const firstTeacher = new Teacher('Yeray', "Artiles")
const secondTeacher = new Teacher('Abel', "Mendoza")

class Car {
    constructor (make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}

const HondaCivic2002 = new Car('Honda', 'Civic', 2002)

//console.log(HondaCivic2002)

// Usando propiedades por defecto

class User {
    #name
    #email = 'rebooot@academy'
    constructor (name = 'Guest' , age = 0) {
        this.#name = name
        this.age = age
    }
    get getName(){ // Para acceder a una privada
        return this.#name
    }
    set setName(newName) { // Para modificar una privada
        this.#name = newName
        return this.newName
    }
    set setEmail (newEmail) { // Para modificar una privada
        this.#email = newEmail
    }
    getEmail () { // Para acceder a una privada
        return this.#email
    }
    getEmailPrint () {
        let email = this.getEmail ()
        console.log(email)
    }

}


const user1 = new User('JoseLuis')
const user2 = new User('Raúl', 28)

console.log(user1)
console.log(user2)

console.log(user1.getName)

user1.setName = 'Pepelui'
user1.getEmailPrint()

*/

// Creando clases.


class Student {
    constructor (name) {
        this.name = name
    }
    nameinCaps() {return this.name.toUpperCase()}
}

const student1 = new Student('Raúl')

student1.nameinCaps()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const person1 = new Person (`Raul`, 38)



class Car {
    constructor (maker, model, year) {
        this.maker = maker
        this.model = model
        this.year = year
    }
    printOjectData(objectName){
        console.log('Las especificaciones de este objeto son: ')
        console.log(objectName)
    }
}

const car1 = new Car ('Toyota', 'Yaris', 1998)

car1.printOjectData(car1)