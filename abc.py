# -*- coding: utf-8 -*-

class NodeSinhVien:
    def __init__(self, maSV, hoTen, diem1, diem2):
        self.maSV = maSV
        self.hoTen = hoTen
        self.diem1 = float(diem1)
        self.diem2 = float(diem2)
        self.diemTB = 0.0
        self.truoc = None
        self.sau = None

    def tinhDiemTB(self):
        self.diemTB = (self.diem1 + self.diem2) / 2


class DSLKSinhVien:
    def __init__(self):
        self.head = None
        self.last = None

    def themCuoi(self, maSV, hoTen, diem1, diem2):
        nodeMoi = NodeSinhVien(maSV, hoTen, diem1, diem2)
        if self.head is None:
            self.head = nodeMoi
            self.last = nodeMoi
        else:
            nodeMoi.truoc = self.last
            self.last.sau = nodeMoi
            self.last = nodeMoi

    def tinhDiemTBTatCa(self):
        p = self.head
        while p is not None:
            p.tinhDiemTB()
            p = p.sau

    def inDanhSach(self):
        if self.head is None:
            print("Danh sách rỗng.")
            return
        print("[ MaSV ] [ HoTen ] [ Diem1 ] [ Diem2 ] [ DiemTB ]")
        p = self.head
        while p is not None:
            print("[", p.maSV, "]",
                  "[", p.hoTen, "]",
                  "[", p.diem1, "]",
                  "[", p.diem2, "]",
                  "[", round(p.diemTB, 2), "]")
            p = p.sau

    def xoaTheoTen(self, tenCanXoa):
        if self.head is None:
            return False
        p = self.head
        while p is not None:
            if p.hoTen == tenCanXoa:
                if p == self.head:
                    self.head = p.sau
                    if self.head is not None:
                        self.head.truoc = None
                    else:
                        self.last = None
                    return True
                if p == self.last:
                    self.last = p.truoc
                    self.last.sau = None
                    return True
                p.truoc.sau = p.sau
                p.sau.truoc = p.truoc
                return True
            p = p.sau
        return False

    def tinhTrungBinhHaiMon(self):
        if self.head is None:
            return (0.0, 0.0)
        tongMon1 = 0.0
        tongMon2 = 0.0
        dem = 0
        p = self.head
        while p is not None:
            tongMon1 += p.diem1
            tongMon2 += p.diem2
            dem += 1
            p = p.sau
        return (tongMon1 / dem, tongMon2 / dem)

    def xoaToanBo(self):
        self.head = None
        self.last = None


def nhapSo(thongBao):
    while True:
        try:
            return float(input(thongBao))
        except:
            print("Bạn phải nhập số!")


def nhapDanhSach(ds):
    n = int(input("Nhập số lượng sinh viên n: "))
    for i in range(n):
        print("Sinh viên", i + 1)
        maSV = input("  MaSV: ")
        hoTen = input("  HoTen: ")
        diem1 = nhapSo("  Diem1: ")
        diem2 = nhapSo("  Diem2: ")
        ds.themCuoi(maSV, hoTen, diem1, diem2)


def menu():
    print("\n========== MENU DSLK SINH VIEN ==========")
    print("1. Nhập danh sách gồm n SV")
    print("2. Tính cột điểm TB cho từng SV")
    print("3. In ra danh sách SV")
    print("4. Xóa SV theo tên")
    print("5. Tính TB môn Diem1, Diem2 cho toàn bộ danh sách")
    print("6. Xóa toàn bộ danh sách")
    print("0. Thoát")
    print("========================================")


def main():
    ds = DSLKSinhVien()
    chon = -1
    while chon != 0:
        menu()
        try:
            chon = int(input("Chọn chức năng: "))
        except:
            print("Bạn phải nhập số!")
            continue
        if chon == 1:
            nhapDanhSach(ds)
        elif chon == 2:
            ds.tinhDiemTBTatCa()
            print("Đã tính DiemTB cho tất cả sinh viên.")
        elif chon == 3:
            ds.inDanhSach()
        elif chon == 4:
            ten = input("Nhập tên cần xóa: ")
            if ds.xoaTheoTen(ten):
                print("Đã xóa sinh viên tên", ten)
            else:
                print("Không tìm thấy sinh viên tên", ten)
        elif chon == 5:
            tb1, tb2 = ds.tinhTrungBinhHaiMon()
            print("TB môn Diem1:", round(tb1, 2))
            print("TB môn Diem2:", round(tb2, 2))
        elif chon == 6:
            ds.xoaToanBo()
            print("Đã xóa toàn bộ danh sách.")
        elif chon == 0:
            print("Thoát.")
        else:
            print("Chức năng không hợp lệ!")


main()
