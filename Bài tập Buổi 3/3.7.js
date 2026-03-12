const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function check() {
  rl.question("Nhap a: ", function (inputA) {
    rl.question("Nhap b: ", function (inputB) {
      rl.question("Nhap toan tu (+, -, *, /): ", function (toanTu) {
        let a = Number(inputA);
        let b = Number(inputB);
        let ketQua;

        if (toanTu === "+") {
          ketQua = a + b;
        } else if (toanTu === "-") {
          ketQua = a - b;
        } else if (toanTu === "*") {
          ketQua = a * b;
        } else if (toanTu === "/") {
          if (b === 0) {
            console.log("Khong the chia cho 0");
            tieptuc();
            return;
          }
          ketQua = a / b;
        } else {
          console.log("Toan tu khong hop le");
          tieptuc();
          return;
        }

        console.log("a = " + a);
        console.log("b = " + b);
        console.log("Toan tu: " + toanTu);
        console.log(a + " " + toanTu + " " + b + " = " + ketQua);

        tieptuc();
      });
    });
  });
}

function tieptuc() {
  rl.question("Tiep tuc (t/T de thoat, phim khac de tiep): ", function (tiepTuc) {
    if (tiepTuc === "t" || tiepTuc === "T") {
      console.log("Chuong trinh ket thuc");
      rl.close();
    } else {
      check();
    }
  });
}

check();