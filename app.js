//từ khoá khai báo biến
// var || let || const
// cú pháp : [ từ khoá khai báo biến] [ tên biến ] = [giá trị]
// var : biến toàn cục( cục bộ - global scope ), có thể khai báo và gán lại giá trị
// let : không khi báo lại được nhưng gán lại được
// const : không khai báo và gán lại được giá trị

let input1 = +prompt("Điểm Vật Lý :");
let input2 = +prompt("Điểm Hoá Học:");
let input3 = +prompt("Điểm Sinh Học:");
let sum = input1 + input2 + input3;
let average = sum / 3;
document.write("Điểm trung bình 3 môn là:" + " " + average.toFixed(2));

// ex=2
let celsius = +prompt("Nhập độ C:");
let fahrenheit = celsius * 1.8 + 32;
document.write("Nhiệt độ là:" + " " + fahrenheit.toFixed(1) + " " + "độ F");
let inputDo_F = +prompt("Nhập độ C:");
let outDo_C = (inputDo_F - 32) / 1.8;
document.write("Nhiệt độ là:" + " " + outDo_C.toFixed(1) + " " + "độ C");
// ex-3- tính diện tích hình tròn
let radius1 = prompt("Nhập bán kinh tính diện tích:");
let acreage = radius1 * radius1 * 3.14;
document.write("Diện tích hình tròn là:" + `${acreage.toFixed(2)}`);

//ex-4- tính chu vi hình tròn
let radius2 = prompt("Nhập bán kinh tính chu vi:");
let perimeter = 2 * 3.14 * radius2;
document.write("Chu vi hình tròn là:" + `${perimeter.toFixed(2)}`);
