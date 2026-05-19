function p31() {
    let edad = parseInt(document.getElementById("edad").value);
    let res = (edad >= 18) ? "Sí puedes votar en las próximas elecciones." : "Aún no tienes la edad mínima para votar.";
    document.getElementById("res").textContent = res;
}

function p32() {
    let horas = parseFloat(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);
    let sueldo;
    if (horas <= 40) {
        sueldo = horas * pago;
    } else {
        sueldo = (40 * pago) + ((horas - 40) * (pago * 2));
    }
    document.getElementById("res").textContent = "Sueldo semanal: $" + sueldo.toFixed(2);
}

function p33() {
    let dinero = parseFloat(document.getElementById("presupuesto").value);
    let regalo;
    if (dinero <= 10) regalo = "Tarjeta";
    else if (dinero <= 100) regalo = "Chocolates";
    else if (dinero <= 250) regalo = "Flores";
    else regalo = "Anillo";
    document.getElementById("res").textContent = "Con $" + dinero + " puedes comprar: " + regalo;
}

function p34() {
    let horas = Math.ceil(parseFloat(document.getElementById("horas").value));
    let total = 0;
    if (horas <= 2) total = horas * 5;
    else if (horas <= 5) total = (2 * 5) + (horas - 2) * 4;
    else if (horas <= 10) total = (2 * 5) + (3 * 4) + (horas - 5) * 3;
    else total = (2 * 5) + (3 * 4) + (5 * 3) + (horas - 10) * 2;
    document.getElementById("res").textContent = "Total a pagar: $" + total.toFixed(2);
}

function p35() {
    let personas = [
        { nombre: document.getElementById("n1").value, edad: parseInt(document.getElementById("e1").value) },
        { nombre: document.getElementById("n2").value, edad: parseInt(document.getElementById("e2").value) },
        { nombre: document.getElementById("n3").value, edad: parseInt(document.getElementById("e3").value) }
    ];
    let menor = personas.reduce((prev, curr) => (prev.edad < curr.edad) ? prev : curr);
    document.getElementById("res").textContent = "La persona menor es " + menor.nombre + " con " + menor.edad + " años.";
}

function p36() {
    let precio = parseFloat(document.getElementById("precio").value);
    let desc;
    if (precio >= 200) desc = 0.15;
    else if (precio > 100) desc = 0.12;
    else desc = 0.10;
    let ahorro = precio * desc;
    document.getElementById("res").textContent = "Descuento aplicado: $" + ahorro.toFixed(2) + " | Total: $" + (precio - ahorro).toFixed(2);
}

function p37() {
    let edad = parseInt(document.getElementById("edad").value);
    let prom = parseFloat(document.getElementById("prom").value);
    let beca = 0;
    if (edad > 18) {
        if (prom >= 9) beca = 2000;
        else if (prom >= 7.5) beca = 1000;
        else if (prom >= 6) beca = 500;
    } else {
        if (prom >= 9) beca = 3000;
        else if (prom >= 8) beca = 2000;
        else if (prom >= 6) beca = 100;
    }
    document.getElementById("res").textContent = (beca > 0) ? "Monto de la beca: $" + beca : "Carta de invitación enviada.";
}

function p38() {
    let ant = parseFloat(document.getElementById("ant").value);
    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let bAnt = 0, bSueldo = 0;
    
    if (ant > 2 && ant < 5) bAnt = sueldo * 0.20;
    else if (ant >= 5) bAnt = sueldo * 0.30;
    
    if (sueldo < 1000) bSueldo = sueldo * 0.25;
    else if (sueldo <= 3500) bSueldo = sueldo * 0.15;
    else bSueldo = sueldo * 0.10;
    
    let mayor = Math.max(bAnt, bSueldo);
    document.getElementById("res").textContent = "Bono asignado: $" + mayor.toFixed(2) + " (Basado en el criterio más alto)";
}

function p39() {
    let tipo = document.getElementById("tipo").value;
    let alcohol = document.getElementById("alcohol").checked;
    let lentes = document.getElementById("lentes").checked;
    let enf = document.getElementById("enf").checked;
    let edad = parseInt(document.getElementById("edad").value);
    
    let base = (tipo === 'A') ? 1200 : 950;
    let cargos = 0;
    if (alcohol) cargos += base * 0.10;
    if (lentes) cargos += base * 0.05;
    if (enf) cargos += base * 0.05;
    cargos += (edad > 40) ? base * 0.20 : base * 0.10;
    
    document.getElementById("res").textContent = "Costo total de la póliza: $" + (base + cargos).toFixed(2);
}

function p310() {
    let dinero = parseFloat(document.getElementById("dinero").value);
    let kmCosto = parseFloat(document.getElementById("kmCosto").value);
    const destinos = [
        { nombre: "Cancún", dist: 1800 },
        { nombre: "Acapulco", dist: 1200 },
        { nombre: "Puerto Vallarta", dist: 800 },
        { nombre: "México", dist: 750 }
    ];
    let mensaje = "Quedarse en casa";
    for (let d of destinos) {
        if (dinero >= (d.dist * kmCosto * 2)) {
            mensaje = "Puedes ir a: " + d.nombre;
            break;
        }
    }
    document.getElementById("res").textContent = mensaje;
}

function p311() {
    let ant = parseInt(document.getElementById("ant").value);
    let bono = 0;
    if (ant >= 1 && ant <= 5) bono = ant * 100;
    else if (ant > 5) bono = 1000;
    document.getElementById("res").textContent = "Monto del bono: $" + bono;
}

function p312() {
    let horas = parseFloat(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);
    let sueldo = 0;
    if (horas > 50) {
        document.getElementById("res").textContent = "Error: No se permite trabajar más de 50 horas.";
        return;
    }
    if (horas <= 40) {
        sueldo = horas * pago;
    } else if (horas <= 45) {
        sueldo = (40 * pago) + (horas - 40) * (pago * 2);
    } else {
        sueldo = (40 * pago) + (5 * (pago * 2)) + (horas - 45) * (pago * 3);
    }
    document.getElementById("res").textContent = "Sueldo total: $" + sueldo.toFixed(2);
}

function p313() {
    let alumnos = parseInt(document.getElementById("alumnos").value);
    let costoUnitario;
    if (alumnos > 100) costoUnitario = 20;
    else if (alumnos >= 50) costoUnitario = 35;
    else if (alumnos >= 20) costoUnitario = 40;
    else costoUnitario = 70;
    document.getElementById("res").textContent = "Costo por alumno: $" + costoUnitario + " | Total viaje: $" + (costoUnitario * alumnos);
}