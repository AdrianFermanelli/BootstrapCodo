function resumen() {
    let cantidad = parseInt(document.getElementById("cantidadTicket").value);
    let categoria = document.getElementById("inputGroupSelect01").value;
    console.log(categoria);
    let total = document.getElementById("TotalPagar");
    console.log("INICIO")
    let num;
    num = cantidad * 200;
    if (categoria == "1") {
        num = num - ((num * 80) / 100);
    } else if (categoria == "2") {
        num = num - ((num * 50) / 100);
    } else {
        num = num - ((num * 15) / 100);
    }

    total.value = "Total a Pagar: $" + num;
}

function borrar() {
    let cantidad = document.getElementById("cantidadTicket");
    cantidad = "";
    let total = document.getElementById("TotalPagar");
    total = "Total a Pagar: $";
    let nombre = document.getElementById("nombre");
    nombre = "";
    let apellido = document.getElementById("apellido");
    apellido = "";
    let email = document.getElementById("email");
    email = "";
}