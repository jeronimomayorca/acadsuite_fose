ciudades = () => { 
	let listado = 'ciudad';
	let departamento =  document.getElementById('departamento').value; 

	let data = new FormData();
	data.append('listado', listado);
	data.append('departamento', departamento);

	fetch('divipola.php',{
		method: 'POST',
		body: data
	})
	.then(respuesta=>respuesta.text())
	.then(resultado=>{
		document.getElementById('municipio').innerHTML = resultado;
	})
}

poblados = () => { 
	let listado = 'poblados';
	let departamento =  document.getElementById('departamento').value;
	let municipio =  document.getElementById('municipio').value; 

	let data = new FormData();
	data.append('listado', listado);
	data.append('departamento', departamento);
	data.append('municipio', municipio);

	fetch('divipola.php',{
		method: 'POST',
		body: data
	})
	.then(respuesta=>respuesta.text())
	.then(resultado=>{
		document.getElementById('poblado').innerHTML = resultado;
	})
}