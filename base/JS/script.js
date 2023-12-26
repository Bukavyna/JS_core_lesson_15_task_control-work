
const getSelector = selector => document.querySelector(selector);

getSelector(`.btn-edit`).onclick = function () {
	getSelector(`.btn-edit`).style.boxShadow = `#FFBD00 0 0 2px 2px`;
	getSelector(`.btn-style`).style.boxShadow = ``;
	getSelector('.edit-block').classList.add(`show`);
	getSelector('.style-block').classList.remove(`show`);
	getSelector('.edit-area').value = getSelector('.top-block').innerHTML;
}

getSelector('.edit-area').addEventListener(`click`, () => {
	getSelector('.edit-area').style.boxShadow = `#B7D5F4 0 0 4px 4px`;
});

getSelector('.edit-area').addEventListener(`blur`, () => {
	getSelector('.edit-area').style.boxShadow = ``;
});

getSelector(`.btn-save`).onclick = function () {
	getSelector('.edit-block').classList.remove(`show`);
	getSelector('.top-block').innerHTML = getSelector('.edit-area').value;
}

getSelector('.btn-style').addEventListener('click', () => {
	getSelector(`.btn-style`).style.boxShadow = `#0A97BD 0 0 2px 2px`;
	getSelector(`.btn-edit`).style.boxShadow = ``;
	getSelector('.style-block').classList.add(`show`);
	getSelector('.edit-block').classList.remove(`show`);
})

function fontSize () {
	getSelector('.top-block').style.fontSize = event.target.value;
}

let fonts = document.getElementById('fontFamily');
	fonts.onchange = function () {
		getSelector('.top-block').style.fontFamily = this.value;
}

//start function color text

function colorText(color) {
	document.querySelector('.top-block').style.color = color;
	document.querySelector('.top-block').style.transition = "color 1s";
}

//end function color text
        //----------------------------
//start function color text (display = 'flex'), background-color text (display = 'none')

getSelector('.btn-text-color').onclick = function () {
	getSelector('#colors').style.display = 'flex';
	// getSelector('#colors').style.rotate = 'flex';
	getSelector('#background').style.display = 'none';
	getSelector('.btn-bg-color').classList.remove('btn-bg-color-click');
	getSelector('.btn-text-color').classList.add('btn-bg-color-click');
}

//end function color text (display = 'flex'), background-color text (display = 'none')
        //----------------------------
//start function background-color text

function backgroundColor(backgroundColor) {
	document.querySelector('.top-block').style.backgroundColor = backgroundColor;
	document.querySelector('.top-block').style.transition = "background-color 1s";
}

//end function background-color text
        //----------------------------
//start function color text (display = 'none'), background-color text (display = 'flex')


 getSelector('.btn-bg-color').onclick = function () {
		getSelector('#colors').style.display = 'none';
		getSelector('#background').style.display = 'flex';

		let currentRotation = 0;
		const maxRotation = 360;
		const rotationIncrement = 5;
		const rotationDuration = 5;
		//
		function rotateBackground() {
			if (currentRotation < maxRotation) {
				currentRotation += rotationIncrement;
				// getSelector('#background').style.transform = rotate(${currentRotation}deg);
				setTimeout(rotateBackground, rotationDuration);
			}
		}

		rotateBackground();

	// getSelector('#background').classList.add('rotate');
	getSelector('.btn-bg-color').classList.add('btn-bg-color-click');
	getSelector('.btn-text-color').classList.remove('btn-bg-color-click');
};

//end function color text (display = 'none'), background-color text (display = 'flex')
        //----------------------------
//start function bold style

function fontBold () {
	event.target.checked === true
		?	getSelector('.top-block').classList.add('bold')
		:	getSelector('.top-block').classList.remove('bold');
		}

//end function bold style
        //----------------------------
//start function italic style

function fontStyle () {
	event.target.checked === true
		?	getSelector('.top-block').classList.add('cursive')
		:	getSelector('.top-block').classList.remove('cursive');
}

//end function italic style
        //----------------------------


getSelector('.btn-add').onclick = function () {
	getSelector('.first').classList.remove('show');
	getSelector('.second').classList.add('show');
}

const list = document.forms["form-list"];

document.querySelector(".btn-create-list").onclick = function () {
	const countLi = list.count.value;
	const typeLi = list.type.value;

	getSelector('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
	for (let i = 0; i < countLi; i++) {
		getSelector('.edit-area').value += `<li>item ${i+1}</li>`;
	}
	getSelector('.edit-area').value += `</ul>`;

	getSelector('.first').classList.add('show');
	getSelector('.second').classList.remove('show');
}
