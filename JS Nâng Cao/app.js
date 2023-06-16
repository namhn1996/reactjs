// 1. Map
// Thực hiện 1 hàm callback (() => ), duyệt qua các phần tử và tạo ra mảng mới
// Map nhận 3 tham số: 1 là element, 2 là index, 3 là array

// Ví dụ:
// let numbers = [1,2,3,4,5]
// numbers.map((element,index) => console.log(element*2))
// element là 1,2,3,4,5
// index là vị trí
// output : 2,4,6,8,10

// 2. Foreach
// Thực hiện 1 hàm callback duyệt qua các phần tử và không tạo ra mảng với

// ví dụ
// numbers.forEach((element,index) => element *2);
// console.log()

// 3. Find
// Duyệt qua các phần tử trong mảng. Thỏa mãn điều kiện sẽ trả về phần tử đầu tiên
// ví dụ
// let newNumber = numbers.find((number) => number %2 == 0 )
// console.log(newNumber);

// 4. Filter
// Duyệt qua các phần tử trong mảng,  trả về tất cả các phần tử thỏa mãn điều kiện
// let newNumber = numbers.filter((number) => number %2 == 0 )
// console.log(newNumber);

// indexOf, findIndex, reduce,...

// 5. Arrow function
// function f (){
//     console.log(1);
// }
// const k = () => {
//     console.log(2);
// }

// 6. Destructuring
// Array
// let numbers = [1,2,3,4,5]
// let [a,b, ,d,e] = numbers
// console.log(a,b,d,e);
// let peoole = {
//     name:'back',
//     age:19,
// }
// let {name,age} = peoole
// console.log(name,age);

// 7. Enhanced object literals
// Định nghĩa key : value cho object
// Định nghĩa biến cho object ( chỉ sử dụng khi key thay đổi )
// let name = 'Nam';
// let age = 20
// let course = 'course'
// let student = {
//     name ,
//     age,
//     [course]:'JS'
// }
// console.log(student);

// 8. Rest Parameters
// Khi sử dụng là tham số
// Khi  sử dụng với Destructuring
// ví dụ
// function sum (...rest){
//     console.log(rest);
// }
// sum(1,2,3);

let arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr;
console.log(a, b, c);

// 9. Spread
// Ví dụ
// let course1 = ['PHP', 'ReactJS']
// let course2 = ['HTML', 'CSS','JS']
// let course = [...course1,...course2]
// console.log(course);
