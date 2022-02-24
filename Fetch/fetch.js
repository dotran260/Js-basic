var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON->JS 
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2 style="color:red;">${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        var html = htmls.join('');
        document.querySelector('#post-box').innerHTML = html
    })
    .catch(function(error) {
        alert('Có lỗi !');
    })