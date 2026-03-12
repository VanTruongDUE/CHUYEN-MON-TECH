const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function nhapSo() {
  return new Promise((resolve) => {
    rl.question("Nhap so nguyen n: ", function (input) {
      resolve(Number(input));
    });
  });
}

function checkSNT   (x) {
  if (x < 2) {
    return false;
  }

  for (let i = 2; i <= x-1; i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

function DanhSach(n) {
  let ds = [];
  let cr = 2;

  while (ds.length < n) {
    if (checkSNT(cr)) {
      ds.push(cr);
    }
    cr++;
  }

  return ds;
}

// Hàm 4: hiển thị kết quả
function inKQ(n, danhSach) {
  console.log("n = " + n);
  console.log(danhSach.join(", "));
}

// Hàm main
async function main() {
  let n = await nhapSo();

  if (!Number.isInteger(n) || n <= 0) {
    console.log("Vui long nhap mot so nguyen duong.");
    rl.close();
    return;
  }

  let danhSachSoNguyenTo = DanhSach(n);
  inKQ(n, danhSachSoNguyenTo);

  rl.close();
}

main();