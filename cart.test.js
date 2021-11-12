const { expect } = require("@jest/globals");
// const Cart = require("./cart");
const Cart = require("./cart");
test("User add product to Cart - Jagung / 13", () => {
  const Data = new Cart().tambahProduk("jagung", 13);
  Data.map((val) => {
    expect(val.code).toBe("jagung");
    expect(val.quantity).toBe(13);
  });
});
test("User add product more than one", () => {
  const Data = new Cart();
  Data.tambahProduk("jagung", 13);
  Data.tambahProduk("beras", 10);
  const arrTester = [
    {
      code: "jagung",
      quantity: 13,
    },
    {
      code: "beras",
      quantity: 10,
    },
  ];
  //   console.log(Data.cart);
  Data.cart.map((val, i) => {
    arrTester.map((s, x) => {
      if (i === x) {
        expect(val.code).toBe(s.code);
        expect(val.quantity).toBe(s.quantity);
      }
    });
  });
});
test("User add product more than one with similar code", () => {
  const Data = new Cart();
  Data.tambahProduk("jagung", 13);
  Data.tambahProduk("beras", 10);
  Data.tambahProduk("jagung", 13);
  const arrTester = [
    {
      code: "jagung",
      quantity: 26,
    },
    {
      code: "beras",
      quantity: 10,
    },
  ];
  //   console.log(Data.cart);
  Data.cart.map((val, i) => {
    arrTester.map((s, x) => {
      if (i === x) {
        expect(val.code).toBe(s.code);
        expect(val.quantity).toBe(s.quantity);
      }
    });
  });
});
test("User add product more than one with similar code, after that remove one code", () => {
  const Data = new Cart();
  Data.tambahProduk("jagung", 13);
  Data.tambahProduk("beras", 10);
  Data.tambahProduk("jagung", 13);
  Data.hapusProduk("beras");
  const arrTester = [
    {
      code: "jagung",
      quantity: 26,
    },
  ];
  Data.cart.map((val, i) => {
    arrTester.map((s, x) => {
      if (i === x) {
        expect(val.code).toBe(s.code);
        expect(val.quantity).toBe(s.quantity);
      }
    });
  });
});
test("User show cart", () => {
  const Data = new Cart();
  Data.tambahProduk("jagung", 13);
  Data.tambahProduk("beras", 10);
  Data.tambahProduk("jagung", 13);
  Data.tampilkanCart();
  const arrTester = [
    {
      code: "jagung",
      quantity: 26,
    },
  ];
  console.log(Data, "ceki");
  Data.cart.map((val, i) => {
    arrTester.map((s, x) => {
      if (i === x) {
        expect(val.code).toBe(s.code);
        expect(val.quantity).toBe(s.quantity);
      }
    });
  });
});
