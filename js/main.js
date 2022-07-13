/**bai1 xuat 3 so co thu tu tang dan
* ?khối 1 input
*  3 số dương (num1, num2, num3)
* 
* 
* ?khối2 các bước xữ lý
* B1: Tạo biến a, b, c
* B2: Gan giá trị cho biến
* B3: Lập công thức tính toán
*  Sử dụng các lệnh if else lồng nhau 
* So sanh a, b và c theo từng cặp, chia nhỏ từng trường
*       hợp cho ra các dãy sốn
* B4: Thông báo kết quả ở website
* 
* ?khối 3 output
* sap xếp
*
*/
function thututangdan() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    var c = Number(document.getElementById("num3").value);
    var sapxep;
    if (a > b) {
        if (b > c) {
            sapxep = c < b < a;
            console.log(sapxep = c + "<" + b + "<" + a);
        } else {
            if (a > c) {
                sapxep = b < c < a;
                console.log(sapxep = b + "<" + c + "<" + a);
            } else {
                sapxep = b < a < c;
                console.log(sapxep = b + "<" + a + "<" + c);
            }

        }

    } else {
        if (a > c) {
            sapxep = c < a < b;
            console.log(sapxep = c + "<" + a + "<" + b);
        }
        else {
            if (b > c) {
                sapxep = a < c < b;
                console.log(sapxep = a + "<" + c + "<" + b);

            } else {
                sapxep = a < b < c;
                console.log(sapxep = a + "<" + b + "<" + c);
            }
        }

    }
    document.getElementById("txtResultbai1").innerHTML = sapxep;

}
document.getElementById("btnbai1").onclick = thututangdan;


//bai2
/**Khối 1:Dữ liệu đang có sẵn (Input)
 * tên đối tượng (selectValue, được lấy ra từ form)
 * Khối 2:Các bước xử lý code
 * B1: Tạo biến selectValue
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Nếu value = 'Bo' thì kết quả là 'Xin chào Bố!'
 *     - Nếu value = 'Me' thì kết quả là 'Xin chào Mẹ!'
 *     - Tương tự cho các trường hợp còn lại
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 chaohoi
 */
function chaohoi() {
    var namevalue = document.getElementById("Listoption").value;
    var name;
    switch (namevalue) {
        case "Bo":
            name = "Xin Chào Bố"
            break;
        case "Me":
            name = "Xin Chào Mẹ"
            break;
        case "Anh":
            name = "Xin Chào Anh"
            break;
        case "Em":
            name = "Xin Chào Em"
            break;
        default:
            name = "Xin chào người lạ";
            break;
    }
    document.getElementById("txtchaoHoi").innerHTML = name

}
document.getElementById("btnChaoHoi").onclick = chaohoi;


/**bai3
 * Khối 1: Dữ liệu đang có sẵn (Input)
 * 3 số dương (so1, so2, so3, được lấy ra từ form)
 * Khối 2:Các bước xử lý code
 * B1: Tạo biến so1, so2, so3 và biến count để đếm số chẵn
 * B2: Gan giá trị cho biến count = 0, các biến còn lại lấy từ form
 * B3: Lập công thức tính toán
 *     - Nếu so1 % 2 ==0 thì so1 là số chắn count++
 *     - lặp lại với 2 số còn lại
 *     - số lượng số lẻ = 3- count
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 thoong báo có nhiêu chẵn lẻ
 */
function chanle() {
    var so1 = Number(document.getElementById("num1bai3").value);
    var so2 = Number(document.getElementById("num2bai3").value);
    var so3 = Number(document.getElementById("num3bai3").value);
    var count = 0;

    so1 % 2 == 0 ? count++ : count;
    so2 % 2 == 0 ? count++ : count;
    so3 % 2 == 0 ? count++ : count;
    document.getElementById('txtResultbai3').innerHTML = `Có ${count} số chẵn và ${3 - count
        } số lẻ`;
}
document.getElementById("btnbai3").onclick = chanle;

/**bai4
 * Khối 1: Dữ liệu đang có sẵn (Input)
 * Chiều dài 3 cạnh (canh1 -> a, canh2 ->b ,canh3 -> c , được lấy ra từ form)
 * Khối 2:Các bước xử lý code
 * B1: Tạo biến canh1 ->a, canh2 ->b ,canh3 ->c
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Nếu a == b && b == c thì đó là tam giác đều
 *     - Nếu a == b || b == c || a == c
 *       thì đó là tam giác cân
 *     - Nếu có 1 cạnh bằng căn bậc 2 của tổng bình phương 2 cạnh còn lại
 *       thì đó là tam giác vuông
 *     - cả 3 trường hợp đều sai thì đó là loại tam giác khác
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *  kq = (kết quả)
 */
function doanhinhtamgiac() {
    var a = Number(document.getElementById("Canh1").value);
    var b = Number(document.getElementById("Canh2").value);
    var c = Number(document.getElementById("Canh3").value);
    var kq;
    if (a == b && b == c) {
        kq = "Hình tam giác đều";
    } else if (a == b || b == c || a == c) {
        kq = "Hình tam giác cân ";
    } else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == b * b + a * a)) {
        kq = "Hình tam giác vuông";
    } else {
        kq = "Hình tam giác khác";
    }
    document.getElementById("txtketQua").innerHTML = kq
}
document.getElementById("btnKetqua").onclick = doanhinhtamgiac;