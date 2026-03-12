const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhap n (0 <= n <= 100): ", function (input) {
  let n = Number(input);
  let giaiThua = 1;

  if (n < 0 || n > 100 || !Number.isInteger(n)) {
    console.log("Du lieu khong hop le");
    rl.close();
    return;
  }

  for (let i = 1; i <= n; i++) {
    giaiThua = giaiThua * i;
  }

  console.log("n = " + n);
  console.log(n + "! = " + giaiThua);

  rl.close();
});