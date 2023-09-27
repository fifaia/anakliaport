function carMove() {
	if (car.direction == 1) {
		if (!$('.wheel').hasClass("m-l")) {
			$('.wheel').removeClass('m-r')
			$('.wheel').addClass('m-l')
		}
	}else if (car.direction == -1) {
		if (!$('.wheel').hasClass("m-r")) {
			$('.wheel').removeClass('m-l')
			$('.wheel').addClass('m-r')
		}	
	}else if (car.direction == 0) {
		$('.wheel').removeClass('m-r')
		$('.wheel').removeClass('m-l')
	}

	if (car.direction == 1 && car.left > -404) {
		car.left-=5;
	}else if (car.direction == -1 && car.left < 150) {
		car.left+=5;
	}


	$('.track').css('left', `${car.left}px`)
}

function carMove(a) {
	car.direction = a;
}

setInterval(()=>{
	carMove();
	moveKran();
}, 100)

document.addEventListener("keypress", logKey);

document.addEventListener("keyup", logKeyup);

function logKeyup(e) {
	if (e.key === 'a') {upA()}
	if (e.key === 'd') {upA()}
	if (e.key === 'q') {kran.directionAnchor = 0}
	if (e.key === 'e') {kran.directionAnchor = 0}
	if (e.key === 's') {kran.directionAnchorTop = 0}
	if (e.key === 'w') {kran.directionAnchorTop = 0}
}

function logKey(e) {
	if (e.key === 'a') {downA()}
	if (e.key === 'd') {downD()}
	if (e.key === 'q') {downQ()}
	if (e.key === 'e') {downE()}
	if (e.key === 's') {downS()}
	if (e.key === 'w') {downW()}	
}


function downA() {
	kran.direction = 1;
}

function upA() {
	kran.direction = 0;
}

function downD() {
	kran.direction = -1;
}

function downQ() {
	if (kran.kranAnchorLeft > 152 ) {kran.directionAnchor = 1}
}

function downE() {
	if (kran.kranAnchorLeft < 531 ) {kran.directionAnchor = -1}
}

function downS() {
	if (kran.kranAnchorTop < 205 ) {kran.directionAnchorTop = -1}
	console.log(kran.kranAnchorTop)
}

function downW() {
	if (kran.kranAnchorTop > 0 ) {kran.directionAnchorTop = 1}
	console.log(kran.kranAnchorTop)
}

function moveKran() {
	if (kran.direction == 1 && kran.possitionLeft > 100) {
		if (!$('.wheel-k').hasClass("m-l")) {
			$('.wheel-k').removeClass('m-r')
			$('.wheel-k').addClass('m-l')
			
		}
		kran.possitionLeft--
	}else if (kran.direction == -1 && kran.possitionLeft < 420) {
		if (!$('.wheel-k').hasClass("m-r")) {
			$('.wheel-k').removeClass('m-l')
			$('.wheel-k').addClass('m-r')	
		}
		kran.possitionLeft++;
	}else if (kran.direction == 0) {
		$('.wheel-k').removeClass('m-r')
		$('.wheel-k').removeClass('m-l')
	}
	//anchor
	// console.log(kran.kranAnchorLeft)
	if (kran.directionAnchor == 1 && kran.kranAnchorLeft > 152) {
		kran.kranAnchorLeft-=5
	}else if (kran.directionAnchor == -1 && kran.kranAnchorLeft < 531) {
		kran.kranAnchorLeft+=5
	}

	//anchor top
	if (kran.directionAnchorTop == 1 && kran.kranAnchorTop > 0) {
		kran.kranAnchorTop-=5
	}else if (kran.directionAnchorTop == -1 && kran.kranAnchorTop < 205) {
		kran.kranAnchorTop+=5
	}

	$('.kran').css('left', `${kran.possitionLeft}px`)
	$('.kkr').css('left', `${kran.kranAnchorLeft}px`)

	$('.row').css('height', `${kran.kranAnchorTop + 32}px`)
	$('.plt').css('bottom', `${kran.kranAnchorTop * -1}px`)
}