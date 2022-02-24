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
        content: 'Ok !'
    }
];

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(comments)
        }, 0)
    })
}


//Lấy user.id 
function getUsersByID(userIDs) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIDs.includes(user.id)
        })
        setTimeout(() => {
            resolve(result)
        }, 0)
    })
}
getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        })
        return getUsersByID(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                };
            })
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.filter(function(user) {
                return user.id == comment.user_id;
            })
            html += `<li>${user.name}: ${comment.content}</li>`;
        })
        commentBlock.innerHTML = html;
    })