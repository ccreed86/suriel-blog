const userName = document.querySelector("#usernamebox");
const title = document.querySelector("#title");
const postBox = document.querySelector("#postbox");
const button = document.querySelector("#spill");

button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("fuck");
    const blogpost = {
        userName: userName.value,
        title: title.value, 
        postBox: postBox.value,
    };
    
    if (!blogpost.postBox || !blogpost.title || !blogpost.userName) {
        alert(`Dish the Tea!!!`);
        return;
    }

   localStorage.setItem('blogpost', JSON.stringify(blogpost));

   location.href="./blog.html";
   

});