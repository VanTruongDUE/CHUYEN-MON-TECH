const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhap so KW tieu thu: ", function (input) {
  let soKw = Number(input);
  let donGia;
  let tienDien;
  let tienVat;
  let thanhTien;

  if (soKw >= 1 && soKw <= 100) {
    donGia = 550;
  } else if (soKw <= 150) {
    donGia = 750;
  } else if (soKw <= 200) {
    donGia = 950;
  } else {
    donGia = 1350;
  }

  tienDien = soKw * donGia;
  tienVat = tienDien * 0.1;
  thanhTien = tienDien + tienVat;

  console.log("Tieu thu = " + soKw);
  console.log("Phai tra = " + thanhTien);

  rl.close();
});