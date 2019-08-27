let list;
let url = 'https://jsonplaceholder.typicode.com/users';
let loader = document.getElementById('cover');
let list_box_el = document.getElementById('list_box');

function showLoader() {
	loader.style.display = 'block';
	list_box_el.style.display = 'none';
}

function hideLoader() {
	loader.style.display = 'none';
	list_box_el.style.display = 'block';
}


function sendRequest() {
	showLoader();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.onload = function() {
		list = JSON.parse(xhr.response);
		hideLoader();
	}
	xhr.send(null);
}
sendRequest();

function makeList() {
	for (let i = 0; i < list.length; i++) {
		let userId = i + 1 + '';
		let div = document.createElement('div');
		div.setAttribute('id', 'line');
		//add name
		let addName = document.createElement('p');
		addName.textContent = `name: ${list[i].name}`;
		div.appendChild(addName);
		let inputName = document.createElement('input');
		div.appendChild(inputName);
		addName.onclick = redirect;
		//add email
		let addEmail = document.createElement('p');
		addEmail.textContent = `email: ${list[i].email}`;
		div.appendChild(addEmail);
		let inputEmail = document.createElement('input');
		div.appendChild(inputEmail);
		//add phone number
		let addPhone = document.createElement('p');
		addPhone.textContent = `phone: ${list[i].phone}`;
		div.appendChild(addPhone);
		let inputPhone = document.createElement('input');
		div.appendChild(inputPhone);
		//add company name
		let addCompany = document.createElement('p');
		addCompany.textContent = `company name: ${list[i].company.name}`;
		div.appendChild(addCompany);
		let inputCompany = document.createElement('input');
		div.appendChild(inputCompany);
		//edit button
		let editBtn = document.createElement('button');
		editBtn.setAttribute('id', 'edit');
		editBtn.textContent = 'Edit';
		editBtn.onclick = toEdit;
		div.appendChild(editBtn);
		//delete button
		let deleteBtn = document.createElement('button');
		deleteBtn.setAttribute('id', 'delete');
		deleteBtn.textContent = 'Delete';
		deleteBtn.onclick = toDelete;
		div.appendChild(deleteBtn);
		//edit fucntion
		function toEdit() {
			//change name
			if (inputName.value) {
				addName.textContent = `name: ${inputName.value}`;
				list[i].name = inputName.value;
				inputName.value = '';
			}
			//change email
			if (inputEmail.value) {
				addEmail.textContent = `email: ${inputEmail.value}`;
				list[i].email = inputEmail.value;
				inputEmail.value = '';
			}
			//change phone number
			if (inputPhone.value) {
				addPhone.textContent = `phone: ${inputPhone.value}`;
				list[i].phone = inputPhone.value;
				inputPhone.value = '';
			}
			//change company name
			if (inputCompany.value) {
				addCompany.textContent = `company name: ${inputCompany.value}`;
				list[i].company.name = inputCompany.value;
				inputCompany.value = '';
			}
			//update user on server
			showLoader();
			let userJson = JSON.stringify(list[i]);
			let xhr_put = new XMLHttpRequest();
			xhr_put.open("PUT", url + '/' + userId, true);
			xhr_put.setRequestHeader('Content-type','application/json; charset=utf-8');
			xhr_put.onload = function () {
				let xhr_put_response = JSON.parse(xhr_put.responseText);
				if (xhr_put.readyState == 4 && xhr_put.status == "200") {
					console.table(xhr_put_response);
				} else {
					console.error(xhr_put_response);
				}
				hideLoader();
			}
			xhr_put.send(userJson);
		}
		//delete function
		function toDelete() {
			showLoader();
			let xhr_delete = new XMLHttpRequest();
			xhr_delete.open("DELETE", url + '/' + userId, true);
			xhr_delete.onload = function () {
				let xhr_delete_response = JSON.parse(xhr_delete.responseText);
				if (xhr_delete.readyState == 4 && xhr_delete.status == "200") {
					console.table(xhr_delete_response);
				} else {
					console.error(xhr_delete_response);
				}
				hideLoader();
			}
			xhr_delete.send(null);
			list_box_el.removeChild(div);
		}
		//redirect 
		function redirect() {
			window.location.replace("index_2.html?id=" + list[i].id);
		}

		list_box_el.appendChild(div);
	}
}
makeList();

console.table(list);