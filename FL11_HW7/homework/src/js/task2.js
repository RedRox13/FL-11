let wannaPlay = confirm('Do you want to play a game?');
if (wannaPlay === true) {
	game: while(wannaPlay) {
		let maxNumber = 8;
		let maxPrize = 100;
		let userPrize = 0;
		let randomNumber = Math.floor(1 + Math.random() * maxNumber);
		round:for (let lifes = 3; lifes >= 1; --lifes) {
			let userNumber = +prompt('Choose a roulette pocket number from 0 to ' + maxNumber 
				+ '\nAttempts left: ' + lifes +'\nTotal prize: ' + userPrize 
				+ '$\nPossible prize on current attempt: ' + maxPrize + '$', '');
			if (userNumber === randomNumber) {
				if (lifes === 3) {
					userPrize += maxPrize;
					let victoryLog = confirm('Congratulation, you won!\nYour prize is: ' 
						+ userPrize + '$.\nDo you want to continue?');
					if (victoryLog === false) {
						break round;
					} else {
						maxNumber += 4;
						maxPrize *= 2;
						lifes += 1;
						randomNumber = Math.floor(1 + Math.random() * maxNumber);
					}
				} else if (lifes === 2) {
					userPrize += maxPrize * 0.5;
					let victoryLog = confirm('Congratulation, you won!\nYour prize is: ' 
						+ userPrize + '$.\nDo you want to continue?');
					if (victoryLog === false) {
						break round;
					} else {
						maxNumber += 4;
						maxPrize *= 2;
						lifes += 2;
						randomNumber = Math.floor(1 + Math.random() * maxNumber);
					}
				} else {
					userPrize += maxPrize * 0.25;
					let victoryLog = confirm('Congratulation, you won!\nYour prize is: ' 
						+ userPrize + '$.\nDo you want to continue?');
					if (victoryLog === false) {
						break round;
					} else {
						maxNumber += 4;
						maxPrize *= 2;
						lifes += 3;
						randomNumber = Math.floor(1 + Math.random() * maxNumber);
					}
				}
			} else if (userNumber === null || userNumber === '') {
				break round;
			} else {
				alert('Wrong. Try again');
			}	
		}
		alert('Thank you for your participation.\nYour prize is: ' + userPrize + '$');
		let finalCheck = confirm('Do you want to play again ?');
		if (finalCheck === true) {
			continue game;
		} else {
			break game;
		}
	}
} else {
	alert('You did not become a billionaire, but can');
}