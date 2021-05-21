// 1.
/*
Two disadvantages of creating objects with factory functions are:
1. Each object retains a full copy of all of the methods (which might not be necessary)
2. It isn't possible to tell which objects have been created by which functions (no 'instanceof' keyword)
*/

// 2.

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// console.log(makeObj());


// 3.

// function createInvoice(services) {
//   let phone = 3000;
//   let internet = 5500;

//   if (services) {
//     if (services.phone) {
//       phone = services.phone;
//     }

//     if (services.internet) {
//       internet = services.internet;
//     }
//   }
//   return {
//     phone,
//     internet,
//     total() {
//       return this.phone + this.internet;
//     }
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;
//   let i;

//   for (i = 0; i < invoices.length; i += 1) {
//     total += invoices[i].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({
//   internet: 6500,
// }));

// invoices.push(createInvoice({
//   phone: 2000,
// }));

// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices));    


// 4.

// function createPayment(services = {}) {
//   return {
//     phone: services.phone || 0,
//     internet: services.internet || 0,
//     amount: services.amount,
//     total() {
//       return this.amount || this.phone + this.internet;
//     },
//   }
// }

// function paymentTotal(payments) {
//   let total = 0;
//   let i;

//   for (i = 0; i < payments.length; i += 1) {
//     total += payments[i].total();
//   }

//   return total;
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

// 5.

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,

    total: function() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.phone -= payment.phone;
      this.internet -= payment.internet;
      if (payment.amount) {
        this.phone -= payment.amount;
      }
    },

    addPayments(payments) {
      payments.forEach(payment => this.addPayment(payment))
    },
    
    amountDue() {
      return this.total();
    }
  };
}

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || this.phone + this.internet;
    },
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0