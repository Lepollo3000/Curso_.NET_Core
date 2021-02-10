$(document).ready(function() {
	$('#myForm').on('submit', MostrarDatos);
});

function MostrarDatos(e) {
	var nombre = $('#nombre').val();
	var apellidos = $('#apellidos').val();
	var edad = $('#edad').val();
	var fechaNacimiento = $('#fechaNacimiento').val();
	var usuario = $('#usuario').val();
	var psw = $('#psw').val();
	
	alert(
		'nombre: ' + nombre + '\n' +
		'apellidos: ' + apellidos + '\n' +
		'edad: ' + edad + '\n' +
		'fechaNacimiento: ' + fechaNacimiento + '\n' +
		'usuario: ' + usuario + '\n' +
		'psw: ' + psw
	);
}