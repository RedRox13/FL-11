let rootNode = document.getElementById('root');
let counter = 0;
let dragSrc = null;
let addButton = document.getElementById('addButton');

function dragStart(e) {
  dragSrc = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
  this.classList.add('dragElem');
}
function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}
function dragLeave() {
  this.classList.remove('over');

}
function dragDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrc !== this) {
    this.parentNode.removeChild(dragSrc);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = this.previousSibling;
    addDnD(dropElem);
  }
  this.classList.remove('over');
  return false;
}
function dragEnd() {
  this.classList.remove('over');
}
function addDnD(elem) {
  elem.addEventListener('dragstart', dragStart, false);
  elem.addEventListener('dragover', dragOver, false);
  elem.addEventListener('dragleave', dragLeave, false);
  elem.addEventListener('drop', dragDrop, false);
  elem.addEventListener('dragend', dragEnd, false);
}

let list = document.getElementById('list');
let listLength = list.querySelectorAll('div');
let inputBox = document.getElementById('newAction');
function disableButton() {
	if (inputBox.value.trim()) {
		addButton.setAttribute('class','material-icons button-active');
        addButton.addEventListener('click', addLine);
    } else {
        addButton.setAttribute('class', 'material-icons button-inactive');
        addButton.removeEventListener('click', addLine);
    }
}
inputBox.addEventListener('input', disableButton);

function fullList() {
    let maxLimit = document.createElement('p');
	maxLimit.textContent = 'Maximum item per list are created';
	maxLimit.id = 'maxLimit';
	if (counter < 3) {
		addButton.setAttribute('class','material-icons button-active');
        addButton.addEventListener('click', addLine);
        if (document.getElementById('maxLimit')) {
			document.getElementById('maxLimit').remove();
        }
	} else {
		addButton.setAttribute('class', 'material-icons button-inactive');
        addButton.removeEventListener('click', addLine);
        if (!document.getElementById('maxLimit') ) {
			rootNode.insertBefore(maxLimit, rootNode.children[1]);
        }
	}
}
addButton.addEventListener('click', fullList);

function addLine() {
	counter++;
	let newLine = document.createTextNode(inputBox.value);
	let newDiv = document.createElement('div');
	newDiv.draggable = true;

	function createCheckbox() {
		let checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'checkbox_id';
		checkbox.onclick = function() {
			checkbox.disabled = true
		};
		newDiv.appendChild(checkbox);
		return checkbox;
	}
	function createPen() {
		let correct = document.createElement('i');
		correct.className = 'material-icons';
		correct.textContent += 'create';
		correct.id = 'correct';
		correct.onclick = correctFunc;
		newDiv.appendChild(correct);
	}
	function createBin() {
		let deleteLine = document.createElement('i');
		deleteLine.className = 'material-icons';
		deleteLine.textContent = 'delete';
		deleteLine.id = 'deleteLine';
		deleteLine.onclick = deleteLineFunc;
		newDiv.appendChild(deleteLine);
		deleteLine.addEventListener('click', fullList);
	}
	function createFloppy() {
		let saveChange = document.createElement('i');
		saveChange.className = 'material-icons';
		saveChange.textContent += 'save';
		saveChange.id = 'saveChange';
		saveChange.onclick = saveFunc;
		newDiv.appendChild(saveChange);
	}
		
	createCheckbox();
	newDiv.appendChild(newLine);
	createPen();
	createBin();
	list.appendChild(newDiv);

	function correctFunc() {
		let oldValue = newDiv.textContent.slice(0, -12);
		newDiv.textContent = '';
		let newInput = document.createElement('input');
		newInput.type = 'text';
		newInput.value = oldValue;
		newInput.id = 'newInputId';
		newDiv.appendChild(newInput);
		createFloppy();
	}
	function saveFunc() {
		let newValue = document.getElementById('newInputId').value;
		newDiv.textContent = '';
		createCheckbox();
		newDiv.appendChild(document.createTextNode(newValue))
		createPen();
		createBin();
	}
	function deleteLineFunc() {
		list.removeChild(newDiv);
		counter--;
	}
	addDnD(newDiv);
}
