function alertFunction(e) {
	console.log(e.target);
	e.target.style.background = 'blue';
	alert("YAY! YOU DID IT!!");
}

const btn = document.querySelector(`#btn`);
btn.addEventListener('click', alertFunction);
