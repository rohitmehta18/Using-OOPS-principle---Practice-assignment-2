// Product Class
class Product {
    constructor(name, productId, price) {
      this.name = name;
      this.productId = productId;
      this.price = price;
      this.stock = 0; // default stock
    }
  
    addStock(quantity) {
      this.stock += quantity;
      console.log(`${quantity} units added to ${this.name}. Current stock: ${this.stock}`);
    }
  
    sell(quantity) {
      if (this.stock >= quantity) {
        this.stock -= quantity;
        console.log(`${quantity} units of ${this.name} sold. Remaining stock: ${this.stock}`);
      } else {
        console.log(`Not enough stock to sell ${quantity} units of ${this.name}. Current stock: ${this.stock}`);
      }
    }
  }
  
  // Inventory Class
  class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
      console.log(`${product.name} added to inventory.`);
    }
  
    sellProduct(productId, quantity) {
      const product = this.products.find(p => p.productId === productId);
      if (product) {
        product.sell(quantity);
      } else {
        console.log(`Product with ID ${productId} not found.`);
      }
    }
  
    checkStock(productId) {
      const product = this.products.find(p => p.productId === productId);
      if (product) {
        console.log(`Stock for ${product.name}: ${product.stock}`);
      } else {
        console.log(`Product with ID ${productId} not found.`);
      }
    }
  }
  
  // Test the System
  const inventory = new Inventory();
  
  const product1 = new Product("Laptop", 101, 1000);
  const product2 = new Product("Mouse", 102, 25);
  
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  
  product1.addStock(10);
  product2.addStock(50);
  
  inventory.sellProduct(101, 3); // Sell 3 Laptops
  inventory.sellProduct(102, 60); // Try to sell 60 Mice (should fail)
  
  inventory.checkStock(101);
  inventory.checkStock(102);
  