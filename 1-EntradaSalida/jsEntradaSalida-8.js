/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var numDividendo;
	var numDivisor;
		numDividendo=document.getElementById('numeroDividendo').value;
		numDivisor=document.getElementById('numeroDivisor').value;

	var resto;
	resto=numDividendo%numDivisor;
	alert("el resto de la division es: "+resto);
	
}
