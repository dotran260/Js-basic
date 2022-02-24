// Example 1
// var courseApi = 'http://localhost:3000/courses';
// fetch(courseApi)
//     .then(function(response) {
//         return response.json();
//         // JSON.parse: JSON->JS 
//     })
//     .then(function(courses) {
//         console.log(courses);
//     })

//Example 2 

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCourseForm();
}

start();

//Function
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')

    var htmls = courses.map(function(courses) {
        return `
        <li class="course-item-id">
            <h2>${courses.name}</h2>
            <p>${courses.description}</p>
            <button onclick="deleteCourse(${courses.id})">Xoá</button>
        </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('');
}

function deleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-id')
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function handleCourseForm() {
    var submitBtn = document.querySelector('#submit')
    submitBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description,
        }

        createCourse(formData, function() {
            getCourses(renderCourses);
        });
    }
}