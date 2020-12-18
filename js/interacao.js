document.getElementById('interacao').addEventListener('keyup', mudaTitulo)

function mudaTitulo(event){
	let title = event.target.value
	if(title){
		document.title = event.target.value
	}else{
		document.title = " My Site"
	}
}