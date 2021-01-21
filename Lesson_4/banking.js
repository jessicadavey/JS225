function makeBank() {
  let accounts = [];
  
  function makeAccount(number) {
    let balance = 0;
    let transactions = [];
    return {
      transactions() {
        return transactions;
      },
      balance() {
        return balance;
      },
      number() {
        return number;
      },
      deposit(amount) {
        this.balance += amount;
        transactions.push({type:"deposit", amount: amount});
        return amount;
      },
      withdraw(amount) {
        if (amount > this.balance) {
          amount = this.balance;
        }

        this.balance -= amount;
        transactions.push({type:"withdrawal", amount: amount});
        return amount;
      },
    };
  }

  return {
    openAccount() {
      let account = makeAccount(accounts.length + 101);
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      amount = source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    },
  };
}


