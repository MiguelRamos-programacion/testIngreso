/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
  	
	var resta;
	var num1;
		num1=document.getElementById('numeroUno').value;
	var num2;
		num2=document.getElementById('numeroDos').value;
		resta=num1-num2;
		alert("la resta de los numeros es: "+resta);

}

function multiplicar()
{ 
	
	var multiplicar;
	var num1;
	var num2;
		num1=document.getElementById('numeroUno').value;
	var num2;
		num2=document.getElementById('numeroDos').value;

		multiplicar=num1*num2;

	alert("el producto de los numeros es: "+multiplicar);
}

function dividir()
{
	var dividir;
	var num1;
	var num2;
		num1=document.getElementById('numeroUno').value;
		num2=document.getElementById('numeroDos').value;

		dividir=num1/num2;
		alert("la division de los numeros es: "+dividir);
		

}

