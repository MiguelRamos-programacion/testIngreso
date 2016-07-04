/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
var nombre;
	nombre=document.getElementById('elNombre').value;

	var edad;
	edad=document.getElementById('laEdad').value;

	alert("usted se llama "+nombre+" y su edad es de "+edad+"años");	
}

