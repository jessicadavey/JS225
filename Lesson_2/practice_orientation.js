// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
//   setPrice(price) {
//     if (price < 0) {
//       console.log("Invalid price.");
//       return;
//     }
  
//     this.price = price;
//   },
//   describe() {
//     console.log('Name: ' + this.name);
//     console.log('ID: ' + this.id);
//     console.log('Price: ' + this.price);
//     console.log('Stock: ' + this.stock);
//   },
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
//   setPrice(price) {
//     if (price < 0) {
//       console.log("Invalid price.");
//       return;
//     }
  
//     this.price = price;
//   },
//   describe() {
//     console.log('Name: ' + this.name);
//     console.log('ID: ' + this.id);
//     console.log('Price: ' + this.price);
//     console.log('Stock: ' + this.stock);
//   },
// };

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(price) {
      if (price < 0) {
        console.log("Invalid price.");
        return;
      }
    
      this.price = price;
    },
    describe() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: ' + this.price);
      console.log('Stock: ' + this.stock);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let pen = createProduct(2, 'Pen', 20, 2);
let laptop = createProduct(3, 'Laptop', 3, 1200);

laptop.describe();
