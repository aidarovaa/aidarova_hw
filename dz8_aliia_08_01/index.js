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

const geektech = new User("Geektech", "052018")
console.log(geektech)
geektech.login("Geektech", "052018")