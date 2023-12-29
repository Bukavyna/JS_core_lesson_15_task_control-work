
const getSelector = selector => document.querySelector(selector);

//start function style button - "btn-edit" and "edit-block" - show.

getSelector(`.btn-edit`).onclick = function () {
	getSelector(`.btn-edit`).style.boxShadow = `#FFBD00 0 0 2px 2px`;
	getSelector(`.btn-style`).style.boxShadow = ``;
	getSelector('.edit-block').classList.add(`show`);
	getSelector('.style-block').classList.remove(`show`);
	getSelector('.edit-area').value = getSelector('.top-block').innerHTML;
}

//end function style button - "btn-edit" and "edit-block" - show.
        //----------------------------
//start function adding text to "top-block"

getSelector(`.btn-save`).onclick = function () {
	getSelector('.edit-block').classList.remove(`show`);
	getSelector('.top-block').innerHTML = getSelector('.edit-area').value;
}

//end function  adding text to "top-block"
        //----------------------------
// start function style button - "btn-style", and "style-block" - show.

getSelector('.btn-style').onclick = function () {
	getSelector(`.btn-style`).style.boxShadow = `#0A97BD 0 0 2px 2px`;
	getSelector(`.btn-edit`).style.boxShadow = ``;
	getSelector('.style-block').classList.add(`show`);
	getSelector('.edit-block').classList.remove(`show`);
}

//end function style button - "btn-style", and "style-block" - show.
        //----------------------------
//start function fontSize text

function fontSize () {
	getSelector('.top-block').style.fontSize = event.target.value;
}

//end function fontSize text
        //----------------------------
//start function fontFamily text

let fonts = document.getElementById('fontFamily');
	fonts.onchange = function () {
		getSelector('.top-block').style.fontFamily = this.value;
}

//end function fontFamily text
        //----------------------------
//start function color text

function colorText(color) {
	getSelector('.top-block').style.color = color;
	getSelector('.top-block').style.transition = "color 1s";
}

//end function color text
        //----------------------------
//start function color text (display = 'flex'), background-color text (display = 'none')

getSelector('.btn-text-color').onclick = function () {
	getSelector('#colors').style.display = 'flex';
	getSelector('#background').style.display = 'none';

	let currentRotation = 0;
	const maxRotation = -360;
	const rotationIncrement = -5;
	const rotationDuration = 5;

	function rotateColor() {
		if (currentRotation > maxRotation) {
			currentRotation += rotationIncrement;
			getSelector('#colors').style.transform = `rotate(${currentRotation}deg)`;
			setTimeout(rotateColor, rotationDuration);
		}
	}

	rotateColor();

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
//start function color text (display = 'none'), background-color text (display = 'flex') +
// + rotation colored of blocks

 getSelector('.btn-bg-color').onclick = function () {
		getSelector('#colors').style.display = 'none';
		getSelector('#background').style.display = 'flex';

		let currentRotation = 0;
		const maxRotation = 360;
		const rotationIncrement = 5;
		const rotationDuration = 5;

		function rotateBackground() {
			if (currentRotation < maxRotation) {
				currentRotation += rotationIncrement;
				getSelector('#background').style.transform = `rotate(${currentRotation}deg)`;
				setTimeout(rotateBackground, rotationDuration);
			}
		}

		rotateBackground();

	getSelector('.btn-bg-color').classList.add('btn-bg-color-click');
	getSelector('.btn-text-color').classList.remove('btn-bg-color-click');
};

//end function color text (display = 'none'), background-color text (display = 'flex') +
// + rotation colored of blocks
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
//start function block `second`= block,  block `first`= none

getSelector('.btn-add').onclick = function () {
	getSelector('.first').classList.remove('show');
	getSelector('.second').classList.add('show');
}

//end function block - `second`= block, block - `first`= none
        //----------------------------
//start function form-list

const list = document.forms["form-list"];

document.querySelector(".list").onclick = function () {
	const countLi = list.count.value;
	let typeLi = list.type1.value;
	console.log(typeLi, countLi);

	getSelector('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
	for (let i = 0; i < countLi; i++) {
		getSelector('.edit-area').value += `<li>item ${i+1}</li>`;
	}
	getSelector('.edit-area').value += `</ul>`;

	getSelector('.first').classList.add('show');
	getSelector('.second').classList.remove('show');
}

//end function form-list
        //----------------------------
//start function form-table

const tableForm = document.forms["form-table"];

document.querySelector(".table").onclick = function () {
	const rowCount = tableForm.rows.value;
	const colCount = tableForm.columns.value;
	let widthTr = tableForm.widthTr.value;
	let heightTd = tableForm.heightTd.value;
	const tableBorder = tableForm.borderWidth.value;
	let borderType = tableForm.tableBorderType.value;
	let borderColor = tableForm.tableBorderColor.value;

	getSelector('.edit-area').value += `<table style="text-align: center; border:${tableBorder}px ${borderType} ${borderColor};">`;

	for (let i = 0; i < rowCount; i++) {
		getSelector('.edit-area').value += '<tr>';
		for (let j = 0; j < colCount; j++) {
			getSelector('.edit-area').value += `<td style="width:${widthTr}px; height:${heightTd}px; border: ${tableBorder}px ${borderType} ${borderColor};">TR</td>`;
		}
		getSelector('.edit-area').value += '</tr>';
	}

	getSelector('.edit-area').value += `</table>`;

	getSelector('.first').classList.add('show');
	getSelector('.second').classList.remove('show');
};

//end function form-table
        //----------------------------
//start function block `create-list`= block,  block `create-table`= none

getSelector('.radio-create-table').onclick = function () {
	getSelector('.create-table').classList.remove('show');
	getSelector('.create-list').classList.add('show');
}

//end function block `create-list`= block,  block `create-table`= none
        //----------------------------
//start function block `create-table`= block,  block `create-list`= none

getSelector('.radio-create-list').onclick = function () {
	getSelector('.create-table').classList.add('show');
	getSelector('.create-list').classList.remove('show');
}

//end function block `create-table`= block,  block `create-list`= none