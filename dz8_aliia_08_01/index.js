class User {
    constructor(name, password) {

        this.name = name;
        this.password = password;

    }
    login(name, password){
        if(this.name === name && this.password === password){
            console.log(this)
        }else{
            console.log("Не правильно!")
        }
    }
}

const jack = new User("Jack", "123")
console.log(jack)
jack.login("Jack", "123")