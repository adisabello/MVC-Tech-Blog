function login(){
    event.preventDefault();
    var username = prompt("Enter your username");
    var password = prompt("Enter your password");

    var url = 'http://localhost:3001/api/users/login?username='+username+'&password='+password;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
  
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
        }
    }

    xhr.send();

}

function validateForm(form){
    var username = form.username.value;
    var password = form.password.value;

    var url = 'http://localhost:3001/api/users/login?username='+username+'&password='+password;
    window.location.href = url;

    return false;
}

function validateReg(form){
    var username = form.username.value;
    var password = form.password.value;

    var url = 'http://localhost:3001/api/users/register?username='+username+'&password='+password;
    window.location.href = url;

    return false;
}

function deletePost(id){
    var url = 'http://localhost:3001/api/posts/delete/'+id
    window.location.href = url;
}

function edit(id){
    var title = prompt("Enter new post title");
    var content = prompt("Enter new post content");

    var url = 'http://localhost:3001/api/posts/edit?id='+id+"&title="+title+"&content="+content;
    window.location.href = url;
}

function post(){
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    alert(content);

    var url = 'http://localhost:3001/api/posts/post?title='+title+'&content='+content;
    window.location.href = url;
}

function comment(id){
    var comment = prompt("Enter comment");

    var url = 'http://localhost:3001/api/comments/comment?id='+id+"&comment="+comment;
    window.location.href = url;
}