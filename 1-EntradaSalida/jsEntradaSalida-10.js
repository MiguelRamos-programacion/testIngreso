/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var importe;
		importe=document.getElementById('importe').value;
		importe=parseInt(importe);
	var Descuento;
		Descuento=(importe*0.25);
		Descuento=parseInt(Descuento);
		importe=importe-Descuento;		

		alert("el importe con un descuento del 25% es: "+importe);	
}
