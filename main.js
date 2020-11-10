// 'use strict';
// const assert = require('assert');


class BankAccount {
    constructor(accountNumber, owner, interestRate, transactions){
      this.accountNumber = accountNumber
      this.owner = owner
      this.interestRate = interestRate
      this.transactions = []
      
    }
    balance = () => {
      let sum = 0
      for( let i = 0; i < this.transactions.length; i ++) {
        
        if(this.transactions[i].type === "Charge") {
        sum -= this.transactions[i].amount
        } else {sum += this.transactions[i].amount
        console.log(`TRANSACTION ${this.transactions[i]}`)
        }
       
      }
      console.log(`Your balance is ${sum}`)
      return sum
    }
    deposit = (amount, payee, type) => {
      if(amount >= 1) {
        let deposit = new Transaction(amount, this.owner, "Deposit")
        this.transactions.push(deposit)
      console.log("Depositing Funds!")
      console.log(`amount ${amount}`)
      console.log(`transactions ${this.transactions}`)
      } else {
        console.log("Cannot deposit a negative amount!")
        return "Cannot deposit a negative amount!"
      }
    }
    charge = (amount, payee, type) => {
      if (this.balance() < amount) {
        console.log("You have insuffecient funds!")
        return "You have insuffecient funds!"
        
      } 
       else if(amount >= 1){
        let newCharge = new Transaction(amount, payee, "Charge")
        console.log(`YOU HAVE A NEW CHARGE ${newCharge}`)
        this.transactions.push(newCharge)
      }
      else {
        console.log("Cannot deposit a negative amount!")
        return "Cannot charge a negative amount!"
      }
  
    }

    accrueInterest = () => {
        console.log("Accrueing Interest!")
        let interest = this.balance() * this.interestRate
        let deposit = new Transaction(interest, this.owner, "Deposit")
        this.transactions.push(deposit)

    }
  }
  
  class Transaction {
    constructor(amount, payee, type) {
      this.type = type
      this.amount = amount
      this.payee = payee
      this.date = new Date()
    }
  }
  
  let george = new BankAccount(1234, "George Kastanza", .1)
  
  console.log(george)
  
  george.charge(12)
  george.deposit(9999)
  george.deposit(234324)
  george.deposit(-12313)
  george.charge(3444, "Sam")
  george.accrueInterest()
  george.balance()
  console.log(george.transactions)



//   if (typeof describe === 'function'){
//     describe('BankAccount', function(){
//       it('should have an account owner and account number', function(){
//         // this creates a CrewMember and passes the following arguments into its constructor:
//         // 'Rick Martinez', 'pilot', 'chemistry'
//         const george = new BankAccount(1234, 'George Kastanza');
//         assert.equal(george.owner, 'George Kastanza');
//         assert.equal(george.accountNumber, 1234);
//         // assert.equal(george.transactions, []);
//       });
//       it('should not be able to have a negative balance, or charge a negative number', function(){
//         // this creates a CrewMember and passes the following arguments into its constructor:
//         // 'Rick Martinez', 'pilot', 'chemistry'
//         const george = new BankAccount(1234, 'George Kastanza');
//         assert.equal(george.charge(12), "You have insuffecient funds!");
//         assert.equal(george.charge(-123), "Cannot charge a negative amount!");
//         // assert.equal(george.transactions, []);
//       });
//       it('should not be able deposit a negative amount', function(){
//         // this creates a CrewMember and passes the following arguments into its constructor:
//         // 'Rick Martinez', 'pilot', 'chemistry'
//         const george = new BankAccount(1234, 'George Kastanza');
//         assert.equal(george.deposit(-123), "Cannot deposit a negative amount!");
//         // assert.equal(george.transactions, []);
//       });
//       it('should calc', function(){
//         // this creates a CrewMember and passes the following arguments into its constructor:
//         // 'Rick Martinez', 'pilot', 'chemistry'
//         const george = new BankAccount(1234, 'George Kastanza');
//         assert.equal(george.deposit(-123), "Cannot deposit a negative amount!");
//         // assert.equal(george.transactions, []);
//       });
//     });

    
// }

  
