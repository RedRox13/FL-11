let redirectBtn = document.createElement('button');
let list_box_el = document.getElementById('list_box');
let loader = document.getElementById('loader');
let UserId = window.location.href.slice(38);
let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
let commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
let postsList;
let commentsList;
//loader
function showLoader() {
	loader.style.display = 'block';
	list_box_el.style.display = 'none';
}
function hideLoader() {
	loader.style.display = 'none';
	list_box_el.style.display = 'block';
}
//redirects
function redirect() {
	window.location.replace('index.html');
}
function makeRedirect() {
	redirectBtn.setAttribute('id', 'redirect');
	redirectBtn.textContent = 'oh shit go back';
	redirectBtn.onclick = redirect;
	list_box_el.appendChild(redirectBtn);
}
function postsRequest() {
	showLoader();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', postsUrl + UserId, true);
	xhr.onload = function() {
		postsList = JSON.parse(xhr.response);
		console.log(postsList);
	}
	xhr.send(null);
	//request comments
	let xhr_comments = new XMLHttpRequest();
	xhr_comments.open('GET', commentsUrl, true);
	xhr_comments.onload = function() {
		commentsList = JSON.parse(xhr_comments.response);
		console.log(commentsList);
		makeList(postsList, commentsList)
	}
	xhr_comments.send(null);

}
function makeList(post, comments) {
	for(let i = 0; i < post.length; i++) {
		let div = document.createElement('div');
		div.setAttribute('id', 'line');
		//add title
		let addPostTitle = document.createElement('p');
		addPostTitle.textContent = `Post title: ${post[i].title}`;
		div.appendChild(addPostTitle);
		//add body
		let addPostBody = document.createElement('p');
		addPostBody.textContent = `Post description: ${post[i].body}`;
		div.appendChild(addPostBody);

		for (let k = 0; k < comments.length; k++) {
			//add comments emails
			if (comments[k].postId === post[i].id) {
				let commentEmail = document.createElement('p');
				commentEmail.textContent = `Comment from: ${comments[k].email}`;
				div.appendChild(commentEmail);
				//add comments titles
				let commentTitle = document.createElement('p');
				commentTitle.textContent = `Title: ${comments[k].name}`;
				div.appendChild(commentTitle);
				//add comments bodies
				let commentsBody = document.createElement('p');
				commentsBody.textContent = `Text: ${comments[k].body}`;
				div.appendChild(commentsBody);
			}
		}
		hideLoader();

		list_box_el.appendChild(div);
	}
}

hideLoader();
makeRedirect();
postsRequest();