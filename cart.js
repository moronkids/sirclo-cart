class Cart {
  constructor() {
    this.cart = [];
  }
  tambahProduk(codeProduct, quantity) {
    const arr = [...this.cart];
    const uniqe = arr.findIndex((s) => s.code === codeProduct);
    if (uniqe === -1) {
      arr.push({ code: codeProduct, quantity: quantity });
    } else {
      arr[uniqe].quantity += quantity;
    }
    return (this.cart = arr);
  }
  hapusProduk(codeProduct) {
    this.cart = this.cart.filter((s) => s.code !== codeProduct);
  }
  tampilkanCart() {
    console.log("Your cart : ");
    this.cart.map((s) => {
      console.log(s.code + " " + `(${s.quantity})`);
    });
    return this.cart;
  }
}
const data = new Cart();
data.tambahProduk("jagung", 10);
data.tambahProduk("beras", 1);
data.hapusProduk("jagung");
data.tambahProduk("beras", 12);
data.tampilkanCart();
module.exports = Cart;
