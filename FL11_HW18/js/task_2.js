let redirectBtn = document.createElement('button');
let list_box_el = document.getElementById('list_box');
let loader = document.getElementById('cover');
let UserId = window.location.href.slice(38);
let postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
let commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';
let postId;
let postsList;
let commentsList;

function showLoader() {
	loader.style.display = 'block';
	list_box_el.style.display = 'none';
}
function hideLoader() {
	loader.style.display = 'none';
	list_box_el.style.display = 'block';
}
function redirect() {
	window.location.replace("index.html");
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
	xhr.open('GET', postsUrl + UserId, false);
	xhr.onload = function() {
		postsList = JSON.parse(xhr.response);
		hideLoader();
		console.log(postsList);
	}
	xhr.send(null);
}
function commentsRequest() {
	
}
function makeList() {
	showLoader();
	for(let i = 0; i < postsList.length; i++) {
		postId = i + 1 + '';
		let div = document.createElement('div');
		div.setAttribute('id', 'line');

		//add title
		let addPostTitle = document.createElement('p');
		addPostTitle.textContent = `Post title: ${postsList[i].title}`;
		div.appendChild(addPostTitle);
		//add body
		let addPostBody = document.createElement('p');
		addPostBody.textContent = `Post description: ${postsList[i].body}`;
		div.appendChild(addPostBody);
		
		//request comments
		// let commentsList;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', commentsUrl + postId, false);
		xhr.onload = function() {
			commentsList = JSON.parse(xhr.response);
			console.log(commentsList);
		}
		xhr.send(null);

		for (let k = 0; k < commentsList.length; k++) {
			//add comments emails
			let commentEmail = document.createElement('p');
			commentEmail.textContent = `Comment #${k + 1} from: ${commentsList[k].email}`;
			div.appendChild(commentEmail);
			//add comments titles
			let commentTitle = document.createElement('p');
			commentTitle.textContent = `Title: ${commentsList[k].name}`;
			div.appendChild(commentTitle);
			//add comments bodies
			let commentsBody = document.createElement('p');
			commentsBody.textContent = `Text: ${commentsList[k].body}`;
			div.appendChild(commentsBody);
		}
		hideLoader();

		list_box_el.appendChild(div);
		}
}

hideLoader();
makeRedirect();
postsRequest();
makeList();