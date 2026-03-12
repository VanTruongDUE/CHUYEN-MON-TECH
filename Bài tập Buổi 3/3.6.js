const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhap n (0 <= n <= 9999): ", function (input) {
  let n = Number(input);
  let soChuSo = 0;
  let x = n;

  if (!Number.isInteger(n) || n < 0 || n > 9999) {
    console.log("Du lieu khong hop le");
    rl.close();
    return;
  }

  if (n === 0) {
    soChuSo = 1;
  } else {
    while (x > 0) {
      soChuSo++;
      x = Math.floor(x / 10);
    }
  }

  console.log("n = " + n);
  console.log(n + " co " + soChuSo + " chu so");

  rl.close();
});