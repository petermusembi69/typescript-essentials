type Complex = {money: number, deposit: (a: number) => void };

let bankAccount: Complex = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: Complex, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(6000);

console.log(myself.bankAccount.money);

