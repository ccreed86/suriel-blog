const button = document.querySelector(".back");

button.addEventListener("click", function (event) {
    event.preventDefault();
    location.href="./index.html";

});

function renderBlogPost () {
    const getInfo = JSON.parse(localStorage.getItem("blogpost"));

    if (getInfo !== null) {
        document.querySelector('#title').innerHTML = getInfo.title
        document.querySelector('#blogPost').innerHTML = getInfo.postBox
        document.querySelector('#author').innerHTML = ("--"+getInfo.userName);
    }

}

document.addEventListener("DOMContentLoaded",renderBlogPost);

const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});