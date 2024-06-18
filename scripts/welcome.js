const input = document.getElementById('input');
console.log(input);
function createPost(input) {

  const post = document.createElement('div');
  post.classList.add('post');
  post.textContent = input;

  document.body.appendChild(post);
}