const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhap so a: ", function (inputA) {
  rl.question("Nhap so b: ", function (inputB) {
    rl.question("Nhap so c: ", function (inputC) {
      let A = Number(inputA);
      let B = Number(inputB);
      let C = Number(inputC);

      let soLonNhat = A;
      let soBeNhat = A;

      if (B > soLonNhat) {
        soLonNhat = B;
      }

      if (C > soLonNhat) {
        soLonNhat = C;
      }

      if (B < soBeNhat) {
        soBeNhat = B;
      }

      if (C < soBeNhat) {
        soBeNhat = C;
      }

      console.log("a = " + A);
      console.log("b = " + B);
      console.log("c = " + C);
      console.log("SLN = " + soLonNhat);
      console.log("SBN = " + soBeNhat);

      rl.close();
    });
  });
});