const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hàm 1: nhập số từ bàn phím
function nhapSo() {
  return new Promise((resolve) => {
    rl.question("Nhap vao so nguyen n (2 <= n <= 100): ", function (input) {
      resolve(Number(input));
    });
  });
}

// Hàm 2: kiểm tra dữ liệu hợp lệ
function check(n){
    if (Number.isInteger(n) && n >= 2 && n <= 100) {
        return true;
    }
    return false;
}
// Hàm 3: kiểm tra số nguyên tố
function checkSNT(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= n-1; i++) {
        if (n % i === 0) {
        return false;
        }
    }

    return true;
    }

// Hàm 4: hiển thị kết quả
function inKQ(n) {
  if (checkSNT(n)) {
    console.log(n + " la SNT");
  } else {
    console.log(n + " khong la SNT");
  }
}

// Hàm main để chạy chương trình
async function main() {
  const n = await nhapSo();

  if (!check(n)) {
    console.log("Du lieu khong hop le. Vui long nhap so nguyen tu 2 den 100.");
    rl.close();
    return;
  }

  console.log("n = " + n);
  inKQ(n);  

  rl.close();
}

main();