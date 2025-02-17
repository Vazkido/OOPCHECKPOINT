let products = document.querySelectorAll(".card-item");

products.forEach((item) => {
  let plus = item.querySelector(".fa-plus-circle");
  let minus = item.querySelector(".fa-minus-circle");
  let delBtn = item.querySelector(".fa-trash-alt");
  let heart = item.querySelector(".fa-heart");
  let qty = item.querySelector(".quantity");
  let quantity = parseInt(qty.textContent);
  // let price = parseInt(item.querySelector('.unit-price').textContent.replace("$", ""));

  plus.addEventListener("click", () => {
    quantity++;
    qty.innerHTML = quantity;
    calcTotal("add");
  });
});

// // CLASS WORK TO RECALL OOP LAST CLASS

// // class Animal {
// //     constructor(name, age, color){
// //         this.name = name
// //         this.age = age
// //         this.color = color
// //     }
// //     greet = function (){
// //         console.log(`${this.name} is aggressive and is ${this.age} old`)
// //     }
// // };

// // class Dog extends Animal{
// //     constructor(){
// //         super()
// //     };
// // }

// // class Cat extends Animal{
// //     constructor() {
// //         super(name, age, color)
// //     }
// // };

// // console.log(Dog.greet)

// class Product {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
// }

// class shoppingCartItem {
//   constructor(products, quantity) {
//     this.products = products;
//     this.quantity = quantity;
//   }
//   getTotaltemPrice() {
//     return this.products.price * this.quantity;
//   }
// }

// class ShoppingCart {
//   constructor() {
//     this.item = [];
//   }
//   getTotalPrice() {
//     //   let tot = 0
//     //   for(let item of this.items){
//     //     tot+= item.getTotalItemsPrice()
//     //   }
//     //   return tot            #INSTEAD WE DO THIS IT THIS WAY
//     return this.items.reduce((sum, a) => sum + a.getTotaltemPrice, 0);
//   }

//   addItem(product, quantity) {
//     this.item.push(new shoppingCartItem(product, quantity));
//   }
// }
