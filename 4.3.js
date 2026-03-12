const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hàm hỏi người dùng nhập dữ liệu
function input(cauHoi) {
  return new Promise((resolve) => {
    rl.question(cauHoi, function (cauTraLoi) {
      resolve(cauTraLoi);
    });
  });
}

// Hàm nhập một số thực
async function Nhapso(tenSo) {
  let a;

  while (true) {
    a = Number(await input(`Nhap ${tenSo}: `));

    if (!isNaN(a)) {
      return a;
    }

    console.log("Ban nhap khong phai so. Vui long nhap lai.");
  }
}

// Hàm nhập phép toán
async function nhapPhepToan() {
  let phepToan;

  while (true) {
    phepToan = await input("Nhap phep toan (+, -, *, /): ");

    if (
      phepToan === "+" ||
      phepToan === "-" ||
      phepToan === "*" ||
      phepToan === "/"
    ) {
      return phepToan;
    }

    console.log("Phep toan khong hop le. Vui long nhap lai.");
  }
}

// Hàm tính kết quả
function tinhKetQua(a, b, phepToan) {
  switch (phepToan) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Khong the chia cho 0";
      }
      return a / b;
    default:
      return "Phep toan khong hop le";
  }
}

// Hàm hỏi người dùng có muốn thoát không
async function tieptuc() {
  let luaChonNguoiDung = await input(
    "Nhap t/T de thoat, nhap phim bat ky de tiep tuc: "
  );
  return luaChonNguoiDung;
}

// Hàm chính
async function main() {
  while (true) {
    let a = await Nhapso("so thu nhat");
    let b = await Nhapso("so thu hai");
    let phepToan = await nhapPhepToan();

    let ketQuaTinhToan = tinhKetQua(a, b, phepToan);

    console.log(`So thu nhat: ${a}`);
    console.log(`So thu hai: ${b}`);
    console.log(`Phep toan: ${phepToan}`);

    if (typeof ketQuaTinhToan === "string") {
      console.log(ketQuaTinhToan);
    } else {
      console.log(
        `${a} ${phepToan} ${b} = ${ketQuaTinhToan}`
      );
    }

    let luaChonNguoiDung = await tieptuc();

    if (luaChonNguoiDung === "t" || luaChonNguoiDung === "T") {
      console.log("Chuong trinh da ket thuc.");
      break;
    }
  }

  rl.close();
}

main();