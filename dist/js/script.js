var openModal = 0;
var modal = document.getElementsByClassName('.modal_windows');

function openModals(ind) {
	//openModal = ind;
	if (openModal == 0) {
		modal.style.display = 'none';
	}else {
		modal.style.display = 'block';
	}
}
console.log(openModal);