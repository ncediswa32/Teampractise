// import { Injectable } from "@angular/core";


// @Injectable({
//   providedIn: "root"
// })
// export class CartService {
//   constructor() { }

//   items = [];

//   addToCart(addedItem: any) {
//     this.items.push(addedItem);
//     // console.log(addedItem);
//     //-----check if there are items already added in cart
//     /* let existingItems = [];
//     if ( localStorage.getItem('cart_items')){//----- update by adding new items
//       existingItems = JSON.parse(localStorage.getItem('cart_items'));
//       existingItems = [addedItem, ...existingItems];
//       console.log( 'Items exists');
//     } */
//     //-----if no items, add new items
//     /* else{
//       console.log( 'NO items exists');
//       existingItems = [addedItem]
//     } */
//     this.savebooks();
//   }
//   savebooks() {
//     throw new Error("Method not implemented.");
//   }

//   getItems() {
//     return this.items;
//   }

//   loadCart(): void {
//     this.items = JSON.parse(localStorage.getItem("book_items")) ?? [];
//   }

//   saveCart(): void {
//     localStorage.setItem('cart_items', JSON.stringify(this.items));
//   }

//   clearCart(_items: any) {
//     this.items = [];

//     localStorage.removeItem("cart_items");
//   }

//   removeItem(item) {
//     const index = this.items.findIndex(o => o.id === item.id);

//     if (index > -1) {
//       this.items.splice(index, 1);
//       this.saveCart();
//     }
//   }

//   itemInCart(item: { id: any; }): boolean {
//     return this.items.findIndex(o => o.id === item.id) > -1;
//   }
// }
