'use strict'

class User {
    constructor(username, password, email) {
        this.username = username
        this.password = password
        this.email = email
    }

    login(username, password) {
        if (this.username == username && this.password == password) {
            alert("Bienvenido")
        } else {
            alert("Error")
        }

    }
    resetpassword(newPassword) {
        this.password = newPassword;




    }
    updateInfo(newEmail) {
        this.email = newEmail;
    }

    showInfo(){
        alert(`Username: ${this.username}\n Password:${this.password}\
        \n Email: ${this.email}`);

       
    }
}

 



let user1 = new User("name", 123456, "name@gmail.com");
user1.login("name", 123456);
user1.resetpassword(123);
user1.updateInfo("aas@.com");
user1.showInfo();
