/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	num1=document.getElementById('numeroUno').value;

	var num2;
	num2=document.getElementById('numeroDos').value;

	var resultado;
	resultado=parseInt(num1)+parseInt(num2);

	alert("la suma de los numeros es: "+resultado);
}

