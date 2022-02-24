// String/Array  includes()
// var course = ['Js', 'PHP', 'Ruby'];
// console.log(course.includes('Js', 0))

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

// var htmls = course.map(function(item) {
//     return `<h2>${item}</h2>`
// })
// console.log(htmls.join(''))

// course.forEach(function(index, item) {
//     console.log(item, index)
// })

//Tìm phần tử thực trong mảng
// for (var index in course) {
//     console.log(course[index])
// }

// Document 
// console.log(document.querySelector('.class1'));
// console.log(document.anchors);
// console.log(document.forms.testform2);

// var h1Element = document.querySelector('h1')
// var h1TagName = h1Element.tagName
// var h1NextElementSibling = h1Element.nextElementSibling

// console.log(h1TagName);

/*
    HTML DOM
    //1. Element
    //2. Attribute
    //3. Text
 */
/*
    Domevents
    //1. preventDefault // Ngăn chặn giá trị mặc định
    //2. stopPropagation //Ngăn chặn element chạy ra element cha,chú,bác,dì
 */
/*
    JSON
    //1. stringify: JS -> JSON
    //2. parse: JSON -> JS
 */


//Promise vd
var users = [{
        id: 1,
        name: 'Đình Đô'
    },
    {
        id: 2,
        name: 'Ngân Dút'
    },
    {
        id: 3,
        name: 'Moon'
    }
];

var comments = [{
        id: 1,
        user_id: 1,
        content: 'Chuc mung sinh nhat!'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Qua dau!'
    },
    {
        id: 3,
        user_id: 3,
        content: 'Meo co'
    },
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 3. Từ user_id lấy ra user tương ứng


//fake API


//Hàm lấy comment
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

//Hàm lấy user.id
function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var results = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(results);
        }, 1000)
    });
}

//Hàm xuất
getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });
        // console.log(userIds);
        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                };
            })
    })
    .then(function(data) {
        var commentBlock = document.querySelector('#comment-block');
        var html = '';
        data.comments.forEach(comment => {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `${user.name}:${comment.content}`
        });
        commentBlock.innerHTML = html;
    })