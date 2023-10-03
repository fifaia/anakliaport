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
	conteinerDropDow();
	animationConteiner();
}, 100)

document.addEventListener("keypress", logKey);

document.addEventListener("keyup", logKeyup);

function logs() {
	console.log('possitionLeft', kran.possitionLeft)
	console.log('kranAnchorLeft', kran.kranAnchorLeft)
}

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
	if (e.code === 'Space') {getConteiner()}
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

function drawShip() {
	$('.ship').removeClass().addClass(`ship count-${ship.containerCount}`)
}

drawShip()

function moveKran() {
	if (kran.direction == 1 && kran.possitionLeft > 100) {
		if (!$('.wheel-k').hasClass("m-l")) {
			$('.wheel-k').removeClass('m-r')
			$('.wheel-k').addClass('m-l')
			
		}
		kran.possitionLeft-=5
		conteinerMove([container.possition[0], container.possition[1]-=5])
		logs();
	}else if (kran.direction == -1 && kran.possitionLeft < 420) {
		if (!$('.wheel-k').hasClass("m-r")) {
			$('.wheel-k').removeClass('m-l')
			$('.wheel-k').addClass('m-r')	
		}
		kran.possitionLeft+=5;
		conteinerMove([container.possition[0], container.possition[1]+=5])
		logs();
	}else if (kran.direction == 0) {
		$('.wheel-k').removeClass('m-r')
		$('.wheel-k').removeClass('m-l')
	}
	//anchor
	// console.log(kran.kranAnchorLeft)
	if (kran.directionAnchor == 1 && kran.kranAnchorLeft > 152) {
		kran.kranAnchorLeft-=5
		conteinerMove([container.possition[0], container.possition[1]-=5])
		logs();
	}else if (kran.directionAnchor == -1 && kran.kranAnchorLeft < 531) {
		kran.kranAnchorLeft+=5
		conteinerMove([container.possition[0], container.possition[1]+=5])
		logs();
	}

	//anchor top
	if (kran.directionAnchorTop == 1 && kran.kranAnchorTop > 0) {
		kran.kranAnchorTop-=5
		conteinerMove([container.possition[0]-=5, container.possition[1]])
		logs();
	}else if (kran.directionAnchorTop == -1 && kran.kranAnchorTop < 205) {
		kran.kranAnchorTop+=5
		conteinerMove([container.possition[0]+=5, container.possition[1]])
		logs();
	}

	$('.kran').css('left', `${kran.possitionLeft}px`)
	$('.kkr').css('left', `${kran.kranAnchorLeft}px`)

	$('.row').css('height', `${kran.kranAnchorTop + 32}px`)
	$('.plt').css('bottom', `${kran.kranAnchorTop * -1}px`)


}

function getConteiner() {
	switch(ship.containerCount){
		case 1:
			if (kran.kranAnchorTop === 190) {
				if (kran.possitionLeft + kran.kranAnchorLeft < 696) {
					console.log('marcxena gadaxra')
					addConteinerInGame('left', [364, 647])
				}else if (kran.possitionLeft + kran.kranAnchorLeft > 709) {
					addConteinerInGame('right', [364, 647])
					console.log('marjvena gadaxra')
				}else if (kran.possitionLeft + kran.kranAnchorLeft >= 696 && kran.possitionLeft + kran.kranAnchorLeft <= 709){
					console.log('aigo')
					addConteinerInGame('', [364, 647])
				}
			}else{
				console.log('ver aigo')
			}
			break;
		case 2:
			if (kran.kranAnchorTop === 135) {
				if (kran.possitionLeft + kran.kranAnchorLeft < 696) {
					console.log('marcxena gadaxra')
					addConteinerInGame('left', [307, 647])
				}else if (kran.possitionLeft + kran.kranAnchorLeft > 709) {
					addConteinerInGame('right', [307, 647])
					console.log('marjvena gadaxra')
				}else if (kran.possitionLeft + kran.kranAnchorLeft >= 696 && kran.possitionLeft + kran.kranAnchorLeft <= 709){
					console.log('aigo')
					addConteinerInGame('', [307, 647])
				}
			}else{
				console.log('ver aigo')
			}
			break;
		case 3:
			if (kran.kranAnchorTop === 75) {
				if (kran.possitionLeft + kran.kranAnchorLeft < 696) {
					console.log('marcxena gadaxra')
					addConteinerInGame('left', [249, 647])
				}else if (kran.possitionLeft + kran.kranAnchorLeft > 709) {
					addConteinerInGame('right', [249, 647])
					console.log('marjvena gadaxra')
				}else if (kran.possitionLeft + kran.kranAnchorLeft >= 696 && kran.possitionLeft + kran.kranAnchorLeft <= 709){
					console.log('aigo')
					addConteinerInGame('', [249, 647])
				}
			}else{
				console.log('ver aigo')
			}
			break;
		case 4:
			if (kran.kranAnchorTop === 190) {
				if (kran.possitionLeft + kran.kranAnchorLeft < 842) {
					console.log('marcxena gadaxra')
					addConteinerInGame('left', [364, 795])
				}else if (kran.possitionLeft + kran.kranAnchorLeft > 857) {
					addConteinerInGame('right', [364, 795])
					console.log('marjvena gadaxra')
				}else if (kran.possitionLeft + kran.kranAnchorLeft >= 842 && kran.possitionLeft + kran.kranAnchorLeft <= 857){
					console.log('aigo')
					addConteinerInGame('', [364, 795])
				}
			}else{
				console.log('ver aigo')
			}
			break;
		case 5:
			if (kran.kranAnchorTop === 135) {
				if (kran.possitionLeft + kran.kranAnchorLeft < 842) {
					console.log('marcxena gadaxra')
					addConteinerInGame('left', [307, 795])
				}else if (kran.possitionLeft + kran.kranAnchorLeft > 857) {
					addConteinerInGame('right', [307, 795])
					console.log('marjvena gadaxra')
				}else if (kran.possitionLeft + kran.kranAnchorLeft >= 842 && kran.possitionLeft + kran.kranAnchorLeft <= 857){
					console.log('aigo')
					addConteinerInGame('', [307, 795])
				}
			}else{
				console.log('ver aigo')
			}
			break;
		case 6:
			if (kran.kranAnchorTop === 75) {
				if (kran.possitionLeft + kran.kranAnchorLeft < 842) {
					console.log('marcxena gadaxra')
					addConteinerInGame('left', [249, 795])
				}else if (kran.possitionLeft + kran.kranAnchorLeft > 857) {
					addConteinerInGame('right', [249, 795])
					console.log('marjvena gadaxra')
				}else if (kran.possitionLeft + kran.kranAnchorLeft >= 842 && kran.possitionLeft + kran.kranAnchorLeft <= 857){
					console.log('aigo')
					addConteinerInGame('', [249, 795])
				}
			}else{
				console.log('ver aigo')
			}
			break;
	}
}

function addConteinerInGame(deviation = '', pos) {
	container.deviation = deviation;
	container.possition[0] = pos[0];
	container.possition[1] = pos[1];
	$('.container').css({'display': 'block', 'top': `${container.possition[0]}px`,  'left': `${container.possition[1]}px`})
	ship.containerCount--;
	kran.isFree = false;
	drawShip()
	
}

function conteinerMove(pos) {
	$('.container').css({'top': `${pos[0]}px`, 'left': `${pos[1]}px`})
}

function conteinerDropDow() {
	if (kran.possitionLeft + kran.kranAnchorLeft < 550 && !kran.isFree) {
		kran.isFree = true;
		conteinerAnimation = 1;
	}
}

function animationConteiner() {
	if (conteinerAnimation === 1) {
		if (container.deviation === 'right') {
			$('.container').css('transform', `rotate(${container.rotationPos-=5}deg)`)
			container.possition[0]+=12
			container.possition[1]-=4
			console.log('modis 1')
			conteinerMove([container.possition[0], container.possition[1]])
		}else if (container.deviation === 'left') {
			$('.container').css('transform', `rotate(${container.rotationPos+=5}deg)`)
			container.possition[0]+=12
			container.possition[1]+=4
			console.log('modis 2')
			conteinerMove([container.possition[0], container.possition[1]])
		}

		if (container.possition[0] > 600) {
			conteinerAnimation = 0;
			container.possition = [0, 0];
			container.rotationPos = 0;
			container.deviation = '';
			$('.container').css('display', 'none')
			$('.container').css('transform', `rotate(0deg)`)
		}
		// console.log('chamovarda')
	}
	

}

let conteinerAnimation = 0;