// function Course(name, price) {
//     this.name = name,
//         this.price = price;
// }
// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const phpCourse = new Course('PHP', 1000);
// const jsCourse = new Course('JS', 1200);
// console.log(phpCourse)
// console.log(jsCourse)




//Example: 
// const person = {
//     firstName: "Trần",
//     lastName: "Đô",
//     age: 20,
//     eyeColor: "Nâu",
//     chilren: {
//         girlfriend: "Ngân"
//     },
//     description: 'Thích thì nhích',
// };
//     // var { age, eyeColor } = person;
// var { firstName, ...rest } = person;
// console.log(rest) //Cách xoá 1 key
// var { chilren: { girlfriend }, description = 'Nếu chưa có value thì thêm, có rồi thì lấy trong Object' } = person;
// console.log(girlfriend, description)

// var array = ['value1', 'value2', 'value3']
// var [a, b, c] = array
// console.log(a, b, c)



//Example:
// function logger(a, b, ...rest) {
//     console.log(rest)
//     console.log(a)
//     console.log(b)
// }
// logger(1, 2, 3, 4)

//Example:
// array1 = ['Đô', 'Ngân', 'Vinh'];
// array2 = ['Vui Tính', 'Xinh Đẹp', 'Lù Đù'];
//array3 = array1.concat(array2) //Cách 1 
// array3 = [...array1, ...array2] //Cách 2
// console.log(array3)

//Example:
// var object1 = {
//     name: 'Đình Đô'
// }
// var object2 = {
//     age: 1200
// }
// var object3 = {
//     ...object1,
//     ...object2,
//     age: 21,
//     price: 14072000
// }
// var { name, age } = object3;
// console.log(object3);

//Example:
var array = ['Đô', 'Ngân', 'Vinh', 'Dậu'];

test(...array);

function test(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
// function test(...rest) {
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }

//Example:
// function highlight([first, ...strings], ...rest) {
//     return rest.reduce((acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]).join('');
// }


// var name = 'Dinh Do';
// var address = '753 Tinh lo 10';
// var html = highlight `Ten la : ${name}, dia chi: ${address} !`;
// console.log(html);


// Example:
const obj = {
    name: 'Dinh Do',
    cat1: {
        name: 'Dinah1',
        cat2: {
            name: 'Dinah2',
            cat3: {
                name: 'Dinah3'
            }
        }
    }
}

// if (obj ? .cat1 ? .cat2 ? .cat3) {}
if (obj.cat1 && obj.cat2 && obj.cat3) {
    console.log(obj.cat1.cat2.cat3.name);
}