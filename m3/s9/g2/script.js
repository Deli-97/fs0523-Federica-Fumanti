"use strict";
class SonAccount {
    constructor(balanceInit = 0) {
        this.balance = 0;
        this.balance = balanceInit;
    }
    oneDeposit(amount) {
        this.balance += amount;
    }
    oneWithdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Credito insufficiente");
        }
    }
    getOneBalance() {
        return this.balance;
    }
}
class MotherAccount extends SonAccount {
    addInterest() {
        const interest = this.getOneBalance() * 0.1;
        this.oneDeposit(interest);
    }
}
const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();
sonAccount.oneDeposit(100);
sonAccount.oneWithdraw(30);
motherAccount.oneDeposit(200);
motherAccount.oneWithdraw(50);
motherAccount.addInterest();
console.log("Son Account Balance:", sonAccount.getOneBalance());
console.log("Mother Account Balance:", motherAccount.getOneBalance());
