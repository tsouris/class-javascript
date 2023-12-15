class User {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    age >= 18 && age <= 127 ? (this.age = age) : (this.age = 18);
    this.email = email;
  }

  printInfo() {
    console.log(`Name: ${this.firstName} 
        Surname: ${this.lastName}
        Age: ${this.age}
        Email: ${this.email}`);
  }

  changeEmail(newEmail) {
    if (newEmail.includes("@")) {
      this.email = newEmail;
    }
  }
}

const Nikolas = new User(
  "Nikolas",
  "Tsouris",
  17,
  "nikolastsouris17@gmail.com"
);
Nikolas.printInfo();

class Client {
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    this._balance = newBalance;
  }

  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const Jeremy = new Client("Jeremy", "Jacobs", 2000);
Jeremy.fullName();
console.log(Jeremy.balance);
