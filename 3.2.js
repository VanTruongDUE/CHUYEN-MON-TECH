const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhap so may muon mua: ", function (input) {
  let soMay = Number(input);
  let donGia;
  let soTien;

  if (soMay >= 5) {
    donGia = 450;
  } else {
    donGia = 500;
  }

  soTien = soMay * donGia;

  console.log("So may = " + soMay);
  console.log("So tien = " + soTien);

  rl.close();
});