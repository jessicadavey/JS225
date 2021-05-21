let ItemManager = (function() {

  let validItem = function(itemName, category, quantity) {
    let validName = itemName.replace(/ /g, '').length >= 5;
    let validCategory = category.split(' ').length === 1;
    let validQuantity = typeof quantity === "number";

    return validName && validCategory && validQuantity;
  };

  let newSKU = function(itemName, category) {
    return (itemName.replace(/ /g, '').slice(0, 3) + category.slice(0, 2)).toUpperCase();
  };

  let newItem = function(itemName, category, quantity) {
    return {
      'skuCode': newSKU(itemName, category),
      'itemName': itemName,
      'category': category,
      'quantity': quantity,
    }
  };

  return {
    items: [],

    findItem(sku) {
      return this.items.find(item => item.skuCode === sku);
    },

    create(itemName, category, quantity) {
      if(validItem(itemName, category, quantity)) {
        this.items.push(newItem(itemName, category, quantity));
      } else {
        return false;
      }
    },

    update(sku, obj) {
      let retrievedItem = this.findItem(sku);
      for (let prop in obj) {
        retrievedItem[prop] = obj[prop];
      }
    },

    delete(sku) {
      this.items = this.items.filter(item => item.skuCode !== sku);
    },

    inStock() {
      return this.items.filter(item => item.quantity > 0);
    },

    itemsInCategory(category) {
      return this.items.filter(item => item.category === category);
    },
  }
})();

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(sku) {
    let item = this.items.findItem(sku);
    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`);
        }
      },
    };
  },

  reportInStock() {
    let list = [];
    this.items.items.forEach(item => {
        if (item.quantity > 0) {
          list.push(item.itemName);
        }
    });
    console.log(list.join(","));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10