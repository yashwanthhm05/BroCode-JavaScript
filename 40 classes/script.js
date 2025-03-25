//class = provides a more structed and cleaner way to
//        work with objects compared to traditional constructor
//        ex. static keyword, encapsulation , inheritance

class Product{
       constructor(name,price){
        this.name = name;
        this.price = price;

       }
       displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : ${this.price}`);
       }
       calculateTotal(salesTax){
        return this.price + (this.price* salesTax)
       }
}
const salesTax = 0.05

const obj1  = new Product("shirt",450);
const obj2  = new Product("pant",650);

// obj1.displayProduct();
// obj2.displayProduct();

const total = obj1.calculateTotal(0.05);
console.log(total)