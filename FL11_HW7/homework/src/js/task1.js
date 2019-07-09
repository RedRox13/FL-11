let userEmail = prompt('Enter your Email', '');
if (userEmail === 'user@gmail.com') {
	let userPassword = prompt('Enter your Password', '');
	if (userPassword === 'UserPass') {
		let suggestChange = confirm('Do you want to change your password?');
		if (suggestChange === true) {
			let passwordCheck = prompt('Enter your old password');
			if (passwordCheck === userPassword) {
				let newUserPassword = prompt('Enter your new password');
				if (newUserPassword.length < 5) {
					alert('It’s too short password. Sorry');
				} else {
					let newUserPasswordCheck = prompt('Enter new password again');
					if (newUserPasswordCheck === newUserPassword) {
						alert('You have successfully changed your password');
					} else {
						alert('You wrote the wrong password');
					}
				}
			} else {
				alert('Wrong password');
			}
		} else {
			alert('You have failed the change');
		}
	} else if (userPassword === null || userPassword === '') {
		alert('Canceled');
	} else {
		alert('Wrong password');
	}
} else if (userEmail === 'admin@gmail.com') {
	let userPassword = prompt('Enter your Password', '');
	if (userPassword === 'AdminPass') {
		let suggestChange = confirm('Do you want to change your password?');
		if (suggestChange === true) {
			let passwordCheck = prompt('Enter your old password');
			if (passwordCheck === userPassword) {
				let newUserPassword = prompt('Enter your new password');
				if (newUserPassword.length < 5) {
					alert('It’s too short password. Sorry');
				} else {
					let newUserPasswordCheck = prompt('Enter new password again');
					if (newUserPasswordCheck === newUserPassword) {
						alert('You have successfully changed your password');
					} else {
						alert('You wrote the wrong password');
					}
				}
			} else {
				alert('Wrong password');
			}
		} else {
			alert('You have failed the change');
		}
	} else if (userPassword === null || userPassword === '') {
		alert('Canceled');
	} else {
		alert('Wrong password');
	}
} else if (userEmail === '' || userEmail === null) {
	alert('Canceled');
} else if (userEmail.length < 6) {
	alert('I don’t know any emails having name length less than 6 symbols');
} else {
	alert('I don’t know you');
}
