class ShoppingCart{
    constructor() {
        this.items = []
    }

    addItem(name, quantity, price) {
        if (!name || !quantity || !price) {
            return undefined;
          }
      
          const existingItem = this.items.find(item => item.name.toLowerCase() === name.toLowerCase());
      
          if (existingItem) {
            existingItem.quantity += quantity;
          } else {
            const newItem = {
              name: name,
              quantity: quantity,
              price: price
            };
            this.items.push(newItem);
          }
      
          return this.items;
    }

    removeItem(name) {
        const itemIndex = this.items.findIndex((item) => 
                    item.name.toLowerCase() === name.toLowerCase())

        if (itemIndex === -1) {
            return undefined
        }

        const deletedItem = this.items.splice(itemIndex, 1)[0]
        return deletedItem
    }

    updateQuantity(name, newQuantity) {
        const itemToUpdate = this.items.find((item) => 
            item.name.toLowerCase() === name.toLowerCase());
    
        if (itemToUpdate) {
          itemToUpdate.quantity = newQuantity;
        } else {
          return undefined;
        }
    }

    getTotalItemCount() {
        let totalCount = 0;
        for (let item of this.items) {
            totalCount += item.quantity;
        }
        return totalCount;
    }

    getTotalPrice() {
        let totalPrice = 0
        for (let item of this.items) {
            totalPrice += item.price * item.quantity
        }
        return totalPrice
    }
}

const cart = new ShoppingCart();
cart.addItem('Shirt', 2, 25);
cart.addItem('Pants', 1, 40);
cart.addItem('Shirt', 3, 25);
console.log(cart.getTotalItemCount()); // Output: 6
console.log(cart.getTotalPrice()); // Output: 165

// cart.updateQuantity('Shirt', 5);
// console.log(cart.getTotalItemCount()); // Output: 6
// console.log(cart.getTotalPrice()); // Output: 215

// const removedItem = cart.removeItem('Pants');
// console.log(removedItem); // Output: { name: 'Pants', quantity: 1, price: 40 }
// console.log(cart.getTotalItemCount()); // Output: 5
// console.log(cart.getTotalPrice()); // Output: 175
