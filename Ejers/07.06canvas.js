
var c = document.getElementById("castillo");
var cxt = c.getContext("2d");


// Dijujamos un castillo
cxt.strokeStyle = "white";
cxt.beginPath();
cxt.moveTo(30,30);
cxt.lineTo(40,30);
cxt.lineTo(40,40);
cxt.lineTo(50,40);
cxt.lineTo(50,30);
cxt.lineTo(60,30);
cxt.lineTo(60,40);
cxt.lineTo(70,40);
cxt.lineTo(70,30);
cxt.lineTo(80,30);
cxt.lineTo(80,40);
cxt.lineTo(90,40);
cxt.lineTo(90,30);
cxt.lineTo(100,30);
cxt.lineTo(100,90);
cxt.lineTo(30,90);
cxt.closePath(); 
cxt.stroke();

// Dibujamos el palo de la bandera
cxt.strokeStyle = "brown";
cxt.beginPath();
cxt.moveTo(55,30);
cxt.lineTo(55,10);
cxt.stroke();

// Dibujamos una bandera
cxt.fillStyle = "blue";
cxt.beginPath();
cxt.moveTo(55,10);
cxt.lineTo(65,15);
cxt.lineTo(55,20);
cxt.fill();  // Cierra la figura y rellena

// Dibujamos la puerta
cxt.fillStyle = "brown";
cxt.beginPath();
cxt.moveTo(55,90);
cxt.lineTo(55,75);
cxt.lineTo(65,70);
cxt.lineTo(75,75);
cxt.lineTo(75,90);
cxt.closePath(); // Cierra la figura
cxt.fill(); // Y la rellena