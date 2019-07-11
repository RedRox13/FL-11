function formatTime(number) {
	let days = parseInt(number / 1440);
	number = number - days * 1440;
	let hours = parseInt(number / 60);
	number = number - hours * 60;
	let minutes = number;
	return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}
console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));