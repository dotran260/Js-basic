/* Làm việc với chuỗi */
// var myString = 'Hoc Js Js Js voi Dinh Doo';
//  1.Length (Đếm kí tự)
// console.log(myString.length)
//  2. Find index (Tìm kiếm kí tự)
// console.log(myString.indexOf('Js', 4)) //Tìm thứ tự của từ 'Js'
// console.log(myString.lastIndexOf('Js')) // Tìm thứ tự cuối cùng 'Js'
//  3.Cut string (Tìm kí tự trong 1 đoạn)
// console.log(myString.slice(4, 12))
// console.log(myString.slice(10, -1))
//  4.Replace (Đổi tên kí tự)
// console.log(myString.replace(/Js/g, 'Javascrtipt')) //Đổi tên 'Js'=>'Javascrtipt'
//  5.Convert to uppercase case & lower case
// console.log(myString.toLocaleUpperCase())
// console.log(myString.toLowerCase())
//  6.Trim (Loại bỏ khoảng trắng thừa 2 đầu)
// console.log(myString.trim().length)
//  7.Split(Điểm chung)
// var datNuoc = 'VN, USA, UC';
// console.log(datNuoc.split(', '))
//  8. Get a character by index (Lấy 1 kí tự của chuỗi)
// console.log(myString.charAt(1))

/* MẢNG */
// var languages = [
//     'Js', //0
//     'PHP', //1
//     'Ruby', //2
//     'Dart' //3
// ];
// var languages2 = [
//     'Đình Đô', //0
//     'Ngân Dút', //1
// ];

// console.log(languages)
// console.log(Array.isArray(languages)) //Kiểm tra có phải mảng hay không?
// console.log(languages[1]) // Lấy ra 1 phần tử trong mảng
// console.log(languages.toString())
// console.log(languages.join(''))// Bỏ [""] 
// console.log(languages.pop()) //Xóa phần tử CUỐI mảng
// console.log(languages.push('Hello', 'Hi')) //Thêm phần tử cuối mảng
// console.log(languages.shift()) //Xóa phần tử ĐẦU mảng
// console.log(languages.unshift('OK')) //Thêm phần tử ĐẦU mảng
// console.log(languages.splice(1, 3)) // Xóa từ 1->3 PHP,Ruby,Dart
// console.log(languages.splice(2, 2, 'Add')) // Xóa từ 1->3 PHP,Ruby,Dart
// console.log(languages.concat(languages2)) //Nối mảng

/*
    Array methods:
        forEach() // Duyệt qua từng phần tử của mảng
        every() // Kiểm tra tất cả
        some()  // Kiểm tra 1 phần tử
        find()  // Tìm kiếm 1 phần tử
        filter() // Tựa find nhưng nhiều phần tử
        map() // Tựa forEach() nhưng dùng để thêm 1 phần tử
        reduce() // lưu trữ biến        
*/

/*
Match object
- Match.PI // số PI =3.14
- Match.round() // Làm tròn số vd: 1.49 = 1 ngược lại 1.50 = 2
- Match.abs()  //Giá trị tuyệt đối
- Match.ceil() //Làm tròn trên vd: 1.000000 = 1 ngược lại 1.00000001 = 2(Note: phải lớn hơn 0)
- Match.floor() //Làm tròn dưới vd: 5.9 = 5
- Match.random() //Số thập phân ngẫu nhiên nhỏ hơn 1 
- Match.min() //Tìm số nhỏ nhất
- Match.max() //Tìm số lớn nhất
 */

/*
    Domevents
    //1. preventDefault // Ngăn chặn giá trị mặc định
    //2. stopPropagation // Ngăn chặn element chạy ra element cha,chú,bác,dì
 */

/*
    JSON
    //1. stringify: JS -> JSON
    //2. parse: JSON -> JS
 */

/*
    Fetch
    -JSON server:API Server (Fake) / Mock Server (Fake)
    -CRUD
        -Create: Tạo mới -> POST
        -Read: Lấy dữ liệu -> GET
        -Update: Chỉnh sửa -> PUT / PATCH
        -Delete: Xoá -> DELETE
    -Postman
 */

/*
    ECMAScript 6+
    // 1. Let, const
        // -. Var/ Let, Const: Scope,Hosting
        // -. Const / Var, Let: Assigment
            
    // 2. Template Literals
    // 3. Multi-line String
    // 4. Arrow function
    // 5. Classes
    // 6. Default parameters values
    // 7. Destructuring
    // 8. Rest parameters
    // 9. Spread
    // 10. Enhanced object literals
    // 11.Tagged template literal
    // 12.Modules
 */