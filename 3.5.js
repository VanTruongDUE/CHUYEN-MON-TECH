const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhap n (2 <= n <= 100): ", function (input) {
  let n = Number(input);
  let laSNT = true;

  if (n < 2 || n > 100 || !Number.isInteger(n)) {
    console.log("Du lieu khong hop le");
    rl.close();
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      laSNT = false;
      break;
    }
  }

  console.log("n = " + n);

  if (laSNT) {
    console.log(n + " la SNT");
  } else {
    console.log(n + " khong la SNT");
  }

  rl.close();
});