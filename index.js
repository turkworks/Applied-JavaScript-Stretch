let clockTime = document.getElementById('time');
let breakTime = document.getElementById('break');
let sessionTime = document.getElementById('session');
let increaseBreak = document.getElementById('break-increase');
let decreaseBreak = document.getElementById('break-decrease');
let increaseSession = document.getElementById('session-increase');
let decreaseSession = document.getElementById('session-decrease');
let startStop = document.getElementById('start-pause');
let running = false;

let b = 5;
let s = 25;
breakTime.innerHTML = b;
sessionTime.innerHTML = s;
clockTime.innerHTML = `${s}:00`;

increaseBreak.addEventListener('click', () => {
	b++;
	breakTime.innerHTML = b;
});

decreaseBreak.addEventListener('click', () => {
	if (b > 1) {
		b--;
		breakTime.innerHTML = b;
	}
});

increaseSession.addEventListener('click', () => {
	s = s + 5;
	sessionTime.innerHTML = s;
});

decreaseSession.addEventListener('click', () => {
	if (s > 5) {
		s = s - 5;
		sessionTime.innerHTML = s;
	}
});

startStop.addEventListener('click', () => {
	if (running) {
		startStop.innerHTML = 'Start';
		running = false;
	} else {
		startStop.innerHTML = 'Pause';
		running = true;
		let time = s * 60;
		startTimer(time);
	}
});

function startTimer(time) {
	let timer = time,
		minutes,
		seconds;
	setInterval(() => {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		clockTime.innerHTML = `${minutes}:${seconds}`;

		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}
